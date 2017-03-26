Step(
	function readFile1() {
		fs.readFile('file1.txt','utf-8',this);
	},
	function readFile2() {
		fs.readFile('file2.txt','utf-8',this);
	},
	function done(err,content) {
		console.log(content);
	}
);
