module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("assets");


    return{
        passthroughFileCopy: true,
        markdownTemplateEngin: "njk",
        templateFormates: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            includes: "includes"

            }

        }

    }
