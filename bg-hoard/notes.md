nx architect (nx.json) target (store)

project,.json from the store project

"build": {
"executor": "@angular-devkit/build-angular:browser",

nx build store --configuration=development

Technically angular.json is a replacement for workspace.json.
if you put everything in the app it will become a monolith. Nx can help you to see what lib is affected. It will be more modular.

npx nx affected:dep-graph --base=main --head=HEAD

https://github.com/nrwl/nx-workshop/blob/master/docs
https://github.com/nrwl/nx-workshop/blob/starting-lab8/apps/api/src/app/app.service.ts

nx run-many --target=serve --all
nx run-many --target=lint --all
