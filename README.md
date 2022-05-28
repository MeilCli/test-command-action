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

## Contributes
[<img src="https://gist.github.com/MeilCli/761db882214b1f68e37dd6bf448cf753/raw/2b05652ea447526ebb0e165475c72d5ecf2cbc6f/metrics_contributors.svg">](https://github.com/MeilCli/test-command-action/graphs/contributors)

### Could you want to contribute?
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
[<img src="https://gist.github.com/MeilCli/761db882214b1f68e37dd6bf448cf753/raw/2b05652ea447526ebb0e165475c72d5ecf2cbc6f/metrics_licenses.svg">](LICENSE)