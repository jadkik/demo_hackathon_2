/**
 *  content representation
 *  content may be basic or composite on any particular page
 *  ex: when building tiles: widgets are basic, tiles are composite
 *      when building pages: tiles and events are basic, pages are composite
 */
export class Content {
    private type: string;
    private id: string;
    //TODO this is temporary representation
    private metadata: {
        information: string[],
        timestamp: string[],
        /**
         * list of ids of contents from which this content is composed
         */
        composition: string[]
    };

    /**
     *  @constructor
     */
    public constructor(type:string, id:string, metadata:any) {
        console.log('Creating new content...');
        this.type = type;
        this.id = id;
        this.metadata = metadata;
    }

    /**
     *  getters and setters
     */
    public getType(): string {
        return this.type;
    }

    public getId(): string {
        return this.id;
    }

    public getMetadata(): any {
        return this.metadata;
    }

    public getComposition(): string[] {
        return this.metadata.composition;
    }

    private setType(type:string) {
        this.type = type;
    }

    private setId(id:string) {
        this.id = id;
    }

    private setMetadata(metadata:any) {
        this.metadata = metadata;
    }
}
