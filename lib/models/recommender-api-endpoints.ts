
export class RecommenderApiEndpoints {

    recommendItems(): string {
        return `recommend/items`;
    }

    trackVisit(visitId: string, contentItemId: string): string {
        return `track/visit?visitId=${visitId}&contentItemId=${contentItemId}`;
    }

    trackConversion(visitId: string, contentItemId: string): string {
        return `track/conversion?visitId=${visitId}&contentItemId=${contentItemId}`;
    }

    trackPortion(visitId: string, contentItemId: string, portionPercentage?: number): string {
        let url = `track/portion?visitId=${visitId}&contentItemId=${contentItemId}`;

        if (portionPercentage) {
            url += `&portionPercentage=${portionPercentage}`;
        }

        return url;
    }

    trackVisitor(visitId: string): string {
        return `track/visitor?visitId=${visitId}`;
    }
}

export const recommenderApiEndpoints = new RecommenderApiEndpoints();
