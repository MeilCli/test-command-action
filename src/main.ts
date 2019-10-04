import * as core from "@actions/core";
import * as exec from "@actions/exec";
import { ExecOptions } from "@actions/exec/lib/interfaces";

async function run() {
    try {
        const command = core.getInput("command", { required: true });
        const expectOutputRegex = core.getInput("expect", { required: true });
        const execOption: ExecOptions = { ignoreReturnCode: true };

        let stdout = "";
        execOption.listeners = {
            stdout: (data: Buffer) => {
                stdout += data.toString();
            }
        };

        await exec.exec(command, undefined, execOption);

        if (stdout.match(expectOutputRegex) == null) {
            core.setFailed(`stdout not match: ${expectOutputRegex}`);
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
