# what's this for

I use Sveltekit to build my control-panel as a static site that I can deploy into [ccu-jack](https://github.com/mdzio/ccu-jack)
on my [ccu3](https://homematic-ip.com/de/produkt/smart-home-zentrale-ccu3).

## build
`pnpm build`

## deploy
`rsync -av --delete -e ssh build/* root@$HOST:/usr/local/addons/ccu-jack/webui/homematic-zapette`
