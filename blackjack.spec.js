
describe('blackjack game dealerShouldDraw tests', () => {
    it('should determine if dealer should draw', () => {
        const dealerHand = [
            { displayVal: 'Ten', suit: 'hearts', val: 10 },
            { displayVal: 'Nine', suit: 'hearts', val: 9 },
        ];

        const result = calcPoints(dealerHand);
        expect(result.total).toEqual(19);
    });

    it('should determine if dealer should draw', () => {
        const dealerHand = [
            { displayVal: 'Ave', suit: 'hearts', val: 11 },
            { displayVal: 'Six', suit: 'hearts', val: 6 },
        ];

        const result = calcPoints(dealerHand);
        expect(result.total).toEqual(17);
    });

    it('should determine if dealer should draw', () => {
        const dealerHand = [
            { displayVal: 'Ten', suit: 'hearts', val: 10 },
            { displayVal: 'Ave', suit: 'hearts', val: 1 },
            { displayVal: 'Six', suit: 'hearts', val: 6 },
        ];

        const result = calcPoints(dealerHand);
        expect(result.total).toEqual(17);
    });

    it('should determine if dealer should draw', () => {
        const dealerHand = [
            { displayVal: 'Two', suit: 'hearts', val: 2 },
            { displayVal: 'Four', suit: 'hearts', val: 4 },
            { displayVal: 'Two', suit: 'hearts', val: 2},
            { displayVal: 'Five', suit: 'hearts', val: 5 },
        ];

        const result = calcPoints(dealerHand);
        expect(result.total).toEqual(13);
    });
});
