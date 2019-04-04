
export class ConfigModel {

    private name: EnvironmentType;
    private app_name: string;
    private app_desc: string;
    private node_port: string;
    private json_indentation: string;
    private databaseUrl: string;
    private dist: string;
    
    constructor(name: EnvironmentType,
        app_name: string,
        app_desc: string,
        node_port: string,
        json_indentation: string,
        databaseUrl: string,

        dist: string){
            this.name = name;
            this.app_name = app_name;
            this.app_desc = app_desc;
            this.node_port = node_port;
            this.json_indentation = json_indentation;
            this.databaseUrl = databaseUrl;
            this.dist = dist;
    }

    get getName(): EnvironmentType {
        return this.name;
    }
    get getApp_name(): string {
        return this.app_name;
    }
    get getApp_desc(): string {
        return this.app_desc;
    }
    get getNode_port(): string {
        return this.node_port;
    }
    get getJson_indentation(): string {
        return this.json_indentation;
    }
    get getDatabaseUrl(): string {
        return this.databaseUrl;
    }
    get getDist(): string {
        return this.dist;
    }
}