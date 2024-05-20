const Reset = '\x1b[0m';
const Bright = '\x1b[1m';
const Dim = '\x1b[2m';
const Underline = '\x1b[4m';
const Blink = '\x1b[5m';
const Reverse = '\x1b[7m';
const Hidden = '\x1b[8m';

const FgBlack = '\x1b[30m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';
const FgBlue = '\x1b[34m';
const FgMagenta = '\x1b[35m';
const FgCyan = '\x1b[36m';
const FgWhite = '\x1b[37m';

const BgBlack = '\x1b[40m';
const BgRed = '\x1b[41m';
const BgGreen = '\x1b[42m';
const BgYellow = '\x1b[43m';
const BgBlue = '\x1b[44m';
const BgMagenta = '\x1b[45m';
const BgCyan = '\x1b[46m';
const BgWhite = '\x1b[47m';

export function black(str: string) {
	return `${FgBlack}${str}${Reset}`;
}
export function red(str: string) {
	return `${FgRed}${str}${Reset}`;
}
export function green(str: string) {
	return `${FgGreen}${str}${Reset}`;
}
export function yellow(str: string) {
	return `${FgYellow}${str}${Reset}`;
}
export function blue(str: string) {
	return `${FgBlue}${str}${Reset}`;
}
export function magenta(str: string) {
	return `${FgMagenta}${str}${Reset}`;
}
export function cyan(str: string) {
	return `${FgCyan}${str}${Reset}`;
}
export function white(str: string) {
	return `${FgWhite}${str}${Reset}`;
}
export function bgBlack(str: string) {
	return `${BgBlack}${str}${Reset}`;
}
export function bgRed(str: string) {
	return `${BgRed}${str}${Reset}`;
}
export function bgGreen(str: string) {
	return `${BgGreen}${str}${Reset}`;
}
export function bgYellow(str: string) {
	return `${BgYellow}${str}${Reset}`;
}
export function bgBlue(str: string) {
	return `${BgBlue}${str}${Reset}`;
}
export function bgMagenta(str: string) {
	return `${BgMagenta}${str}${Reset}`;
}
export function bgCyan(str: string) {
	return `${BgCyan}${str}${Reset}`;
}
export function bgWhite(str: string) {
	return `${BgWhite}${str}${Reset}`;
}
export function reset(str: string) {
	return `${Reset}${str}${Reset}`;
}
export function bright(str: string) {
	return `${Bright}${str}${Reset}`;
}
export function dim(str: string) {
	return `${Dim}${str}${Reset}`;
}
export function underline(str: string) {
	return `${Underline}${str}${Reset}`;
}
export function blink(str: string) {
	return `${Blink}${str}${Reset}`;
}
export function reverse(str: string) {
	return `${Reverse}${str}${Reset}`;
}
export function hidden(str: string) {
	return `${Hidden}${str}${Reset}`;
}
