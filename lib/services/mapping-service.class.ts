import {
    AssetsMapper,
    assetsMapper } from '../mappers';

export interface IMappingService {
    assetsMapper: AssetsMapper;
}

export class MappingService implements IMappingService {
    public assetsMapper: AssetsMapper;

    constructor() {
        this.assetsMapper = assetsMapper;
    }
}
