
export class RecommendationApiEndpoints {

    recommendItems(): string {
        return `recommend/items`;
    }

    trackVisit(): string {
        return `track/visit`;
    }

    trackConversion(): string {
        return `track/conversion`;
    }

    trackPortion(): string {
        return `track/portion`;
    }

    trackVisitor(): string {
        return `track/visitor`;
    }
}

export const recommendationApiEndpoints = new RecommendationApiEndpoints();
