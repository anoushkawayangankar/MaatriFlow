#!/bin/zsh
cd -- "$(dirname -- "$0")" || exit 1
printf 'MaatriFlow demo: open http://127.0.0.1:3000 in your browser.\n'
npm run dev
