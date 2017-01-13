/*
* @Author: halink0803
* @Date:   2017-01-13 15:08:27
* @Last Modified by:   halink0803
* @Last Modified time: 2017-01-13 18:38:15
*/
var gulp = require('gulp');
var fs = require('fs');
var glob = require('glob');
var toml = require('toml');
var S = require('string');
var file = require('gulp-file');

var path = {
	'content' : 'site/content/**/*.md'
};

var processMDFile = function() {
	var indexFiles = [];
	glob(path.content, function(err, files){
		if(err) {
			console.log(err);
		} else {
			files.forEach(function(file) {
				var content = fs.readFileSync(file, 'utf8');
				content = content.split('+++');
				var frontMatter = toml.parse(content[1].trim());

				// you might have different definition of permalink then change this
				var href = frontMatter.slug;
				if(frontMatter.type != null && frontMatter.type == 'post' ){
					href = '/post/' + href;
				}

				//build lunr index
				var index = {
					title: frontMatter.title,
	                href: href,
	                content: S(content[2]).trim().stripTags().stripPunctuation().s
				}
				//console.log(index);
				indexFiles.push(index);
			});
		}
		//console.log(indexFiles);
		file('PagesIndex.json', JSON.stringify(indexFiles), {src: true}).pipe(gulp.dest('./site/static/js/lunr/'));
	});
};

gulp.task("lunr-index", processMDFile());