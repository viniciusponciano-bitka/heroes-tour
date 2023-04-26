import { HttpStatusCode } from "@angular/common/http";
import { Character } from "./character";

export interface MarvelResponse {
    code?: HttpStatusCode;
    status?: string;
    copyright?: string;
    data?: CharacterContainer;
}

interface CharacterContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: Character[];
}
