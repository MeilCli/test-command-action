# test-command-action
![](https://github.com/MeilCli/test-command-action/workflows/CI/badge.svg)  
JavaScript based testing command action for GitHub Actions.  
This action is for developing actions, useful in cases like [MeilCli/setup-crystal-action](https://github.com/MeilCli/setup-crystal-action)

## input
- `command`
  - required
  - execute command
- `expect_regex`
  - expect command output, regex value
- `expect_contain`
  - expect command output, include value

## License
[MIT License](LICENSE).