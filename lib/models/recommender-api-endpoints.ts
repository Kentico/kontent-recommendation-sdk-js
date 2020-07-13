
export class RecommenderApiEndpoints {

    recommendItems(): string {
        return `recommend/items`;
    }

}

export const recommenderApiEndpoints = new RecommenderApiEndpoints();
