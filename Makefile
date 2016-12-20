webpack:
	./node_modules/webpack/bin/webpack.js

rollup:
	./node_modules/rollup/bin/rollup -c rollup.js

compare: 
	make webpack
	make rollup
	du -h dist/*.js