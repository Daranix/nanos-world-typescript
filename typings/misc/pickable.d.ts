declare interface Pickable {
    /**
     * @returns {string}
     * @memberof Pickable
     */
    GetAssetName(): string;
    GetHandler(): Character;
    PullUse(): void;
    ReleaseUse(): void;
}