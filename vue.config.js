module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_resets.scss";
                `
			}
		}
	}
}