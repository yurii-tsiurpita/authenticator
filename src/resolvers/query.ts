class Query {
    hello(parent: any, args: any, context: any) {
        const { text } = context;
        return text;
    }
};

export default Query;