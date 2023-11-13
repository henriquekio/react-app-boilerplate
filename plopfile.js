export default function (plop) {
  plop.setGenerator('components', {
    description: 'GeneratorExpression a new component',
    prompts: [
      {
        type: 'input',
        name: 'component-name',
        message: 'What is the name of your components?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}.js',
      },
    ],
  })
}
