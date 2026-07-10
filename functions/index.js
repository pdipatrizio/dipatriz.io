// Runs only for the root path "/". Serves the Skill Breaker game at the
// root of philip.dipatriz.io while the URL stays on the subdomain. Every
// other host falls through to the static site.
export async function onRequest(context) {
	const url = new URL(context.request.url);
	if (url.hostname === 'philip.dipatriz.io') {
		url.pathname = '/play/';
		return context.env.ASSETS.fetch(url);
	}
	return context.next();
}
