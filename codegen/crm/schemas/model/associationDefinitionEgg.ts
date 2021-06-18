/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Defines an association between two object types.
*/
export class AssociationDefinitionEgg {
    /**
    * ID of the primary object type to link from.
    */
    'fromObjectTypeId': string;
    /**
    * ID of the target object type ID to link to.
    */
    'toObjectTypeId': string;
    /**
    * A unique name for this association.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fromObjectTypeId",
            "baseName": "fromObjectTypeId",
            "type": "string"
        },
        {
            "name": "toObjectTypeId",
            "baseName": "toObjectTypeId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AssociationDefinitionEgg.attributeTypeMap;
    }
}

