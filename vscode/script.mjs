#!/usr/bin/env zx

await $`brew cask install visual-studio-code`;

await $`sudo xattr -dr com.apple.quarantine /Applications/Visual\ Studio\ Code.app`;

console.log(chalk.green("install vscode extensions"));

await $`code --install-extensions formulahendry.auto-rename-tag`;
await $`code --install-extensions icrawl.discord-vscode`;
await $`code -- install-extensions dbaeumer.vscode-eslint`;
await $`code -- install-extensions mhutchie.git-graph`;
await $`code -- install-extensions PKief.material-icon-theme`;
await $`code -- install-extensions ritwickdey.LiveServer`;
await $`code -- install-extensions PKief.material-icon-theme`;
await $`code -- install-extensions unifiedjs.vscode-mdx`;
await $`code -- install-extensions taniarascia.new-moon-vscode`;
await $`code -- install-extensions ms-playwright.playwright`;
await $`code -- install-extensions esbenp.prettier-vscode`;
await $`code -- install-extensions alefragnani.project-manager`;
await $`code -- install-extensions burkeholland.simple-react-snippets`;
await $`code -- install-extensions svelte.svelte-vscode`;
await $`code -- install-extensions bradlc.vscode-tailwindcss`;
await $`code -- install-extensions styled-components.vscode-styled-components`;
await $`code -- install-extensions arcanis.vscode-zipfs`;
