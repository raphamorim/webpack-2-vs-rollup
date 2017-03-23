webpack:
	./node_modules/webpack/bin/webpack.js

rollup:
	./node_modules/rollup/bin/rollup -c rollup.js

comparison:
	make webpack
	make rollup
	du -h dist/*.js
	du -h dist/*.js.map
