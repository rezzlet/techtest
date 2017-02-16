export class Driver {

    public fkteam: number;
    public name: string;
    public country: string;

    public from( data: any ): Driver {

        this.fkteam = parseInt(data.fkteam, 10);
        this.name = data.name;
        this.country = data.country;

        return this;

    }
	
}
