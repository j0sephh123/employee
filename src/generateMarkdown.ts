// partially working

import { globSync } from 'glob';
import { parse } from '@babel/parser';
import fs from 'fs';
import traverse from '@babel/traverse';

interface TestBlock {
  description: string;
  type: 'describe' | 'it';
  isTodo?: boolean;
  children?: TestBlock[];
}

const pattern = `./src/**/*.test.ts`;

// Type guard to check if the callee is an identifier with a name
function isIdentifierWithName(node: any): node is { name: string } {
  return node && node.type === 'Identifier' && typeof node.name === 'string';
}

function extractTestBlocks(ast: any): TestBlock[] {
  const testBlocks: TestBlock[] = [];

  traverse(ast, {
    CallExpression(path) {
      const { callee, arguments: args } = path.node;
      if (
        isIdentifierWithName(callee) &&
        (callee.name === 'describe' || callee.name === 'it')
      ) {
        const description = args[0];
        if (description && description.type === 'StringLiteral') {
          const isTodo = callee.name === 'it' && !args[1];
          const testBlock: TestBlock = {
            description: description.value,
            type: callee.name as 'describe' | 'it',
            isTodo: isTodo,
            children: [],
          };

          // If it's a describe block, recursively extract its children
          if (callee.name === 'describe') {
            const body = args[1];
            if (
              body &&
              (body.type === 'FunctionExpression' || body.type === 'ArrowFunctionExpression') &&
              body.body.type === 'BlockStatement'
            ) {
              const bodyAst = {
                type: 'Program',
                body: body.body.body,
                sourceType: 'module',
              } as any;

              testBlock.children = extractTestBlocks(bodyAst);
            }
          }

          testBlocks.push(testBlock);
        }
      }
    },
  });

  return testBlocks;
}

// Function to convert the test blocks to markdown format
function convertToMarkdown(blocks: TestBlock[], level = 0): string {
  let markdown = '';
  const indent = '  '.repeat(level);

  blocks.forEach(block => {
    if (block.type === 'describe') {
      markdown += `${indent}- ${block.description}\n`;
      if (block.children && block.children.length > 0) {
        markdown += convertToMarkdown(block.children, level + 1);
      }
    } else if (block.type === 'it') {
      const icon = block.isTodo ? '🛠️' : '✅';
      markdown += `${indent}- ${icon} ${block.description}\n`;
    }
  });

  return markdown;
}

const markdownFile = 'testBlocks.md';
fs.writeFileSync(markdownFile, ''); // Clear the file before appending

globSync(pattern, { ignore: `./node_modules/**` }).forEach(file => {
  const contents = fs.readFileSync(file, 'utf8');
  const ast = parse(contents, {
    sourceType: 'module',
    plugins: ['typescript'], // Add this to handle TypeScript files
  });

  const testBlocks = extractTestBlocks(ast);
  const markdownOutput = `## ${file}\n\n${convertToMarkdown(testBlocks)}`;
  fs.appendFileSync(markdownFile, markdownOutput + '\n');
});

console.log('Test blocks saved to testBlocks.md');
