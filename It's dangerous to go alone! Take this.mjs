#!/usr/bin/env zx

console.log(chalk.green("install homebrew"));

await $`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`;

console.log(chalk.green("install via Brewfile"));

await $`brew bundle --file=./Brewfile`;

await $`
    sudo xattr -dr com.apple.quarantine /Applications/Postman.app
    open /Applications/Postman.app
    sudo xattr -dr com.apple.quarantine /Applications/Google\ Chrome.app
    open /Applications/Google\ Chrome.app
    sudo xattr -dr com.apple.quarantine /Applications/iTerm.app
    open /Applications/iTerm.app
    sudo xattr -dr com.apple.quarantine /Applications/Discord.app
    open /Applications/Discord
    sudo xattr -dr com.apple.quarantine /Applications/Notion.app
    open /Applications/Notion
`;

await $`
    open /Applications/kakaotalk.app;
    open /Applications/Hotspot\ Shield.app;
    open /Applications/Figma.app
`;

console.log(chalk.green("install vscode"));

await $`zx ./vscode/script.mjs`;
