import { NetworkInterfaceInfo, networkInterfaces } from 'node:os';

export function getIp() {
	const interfaces: NodeJS.Dict<NetworkInterfaceInfo[]> = networkInterfaces();
	const addresses = [];

	for (const k in interfaces) {
		const iface = interfaces[k];

		if (iface)
			for (const k2 in iface) {
				const address = iface[k2];

				if (address.family === 'IPv4' && !address.internal) {
					addresses.push(address.address);
				}
			}
	}
	return addresses[0] || '127.0.0.1';
}
