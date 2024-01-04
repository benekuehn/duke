const { injectAxe, checkA11y } = require('axe-playwright');

module.exports = {
    async preVisit(page, context) {
        await injectAxe(page);
    },
    async postVisit(page, context) {
        await checkA11y(page, '#storybook-root', {
            detailedReport: true,
            detailedReportOptions: {
                html: true,
            },
        });
    },
};
