# test-command-action
[![CI-Master](https://github.com/MeilCli/test-command-action/actions/workflows/ci-master.yml/badge.svg)](https://github.com/MeilCli/test-command-action/actions/workflows/ci-master.yml)  
testing command action for GitHub Actions.  
This action is for developing actions, useful in cases like [MeilCli/setup-crystal-action](https://github.com/MeilCli/setup-crystal-action)

## input
- `command`
  - required
  - execute command
- `expect_regex`
  - expect command output, regex value
- `expect_contain`
  - expect command output, include value

## Contributing
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
[MIT License](LICENSE).