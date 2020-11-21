const ESCAPE = '\x1b';
const RESET = `${ESCAPE}[0m`;
const BG_RED = `${ESCAPE}[41m`;
const FG_BLACK = `${ESCAPE}[90m`;
const BG_YELLOW = `${ESCAPE}[43m`;
const FG_YELLOW = `${ESCAPE}[33m`;
const FG_GREEN = `${ESCAPE}[32m`;

export const log = {
    red: (...arg: any) => {
        console.log(`${FG_BLACK}${BG_RED}%s${RESET}`, arg);
    },
    yellow: (...arg: any) => {
        console.log(`${FG_YELLOW}%s${RESET}`, arg);
    },
    green: (...arg: any) => {
        console.log(`${FG_GREEN}%s${RESET}`, arg);
    }
}


