class ConfirmationPage {
    constructor(page) {
        this.page = page;
        this.orderConfirmationMessage = '#orderPaymentSuccess'; 
        this.orderNumber = '#orderNumberLabel';
    }

    async isConfirmationPageVisible() {
        return await this.page.isVisible(this.orderConfirmationMessage);
    }

    async isOrderNumberVisible() {
        return await this.page.isVisible(this.orderNumber);
    }
}
module.exports = ConfirmationPage;
