export default function (plop) {
  plop.setGenerator('components', {
    description: 'GeneratorExpression a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
      },
      {
        type: 'confirm',
        name: 'type',
        message: 'You will need a types file for this component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/components.hbs',
        skip: data => {
          if (data.name.length < 1)
            return 'Name is not informed! You need to pass a name to create a component.'

          return true
        },
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.d.ts',
        templateFile: 'generators/types.hbs',
        skip: data => {
          if (!data.type) return 'Types will not created by user choice!'

          return true
        },
      },
    ],
  })
}
