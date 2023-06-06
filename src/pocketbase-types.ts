/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Ingredients = "ingredients",
	Recettes = "recettes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type IngredientsRecord = {
	nom?: string
	prix?: number
	ingredients_img?: string
}

export type RecettesRecord = {
	nom?: string
	instructions?: string
	liste_ingredients?: string
	ingredients?: RecordIdString[]
	prix?: number
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type IngredientsResponse = Required<IngredientsRecord> & BaseSystemFields
export type RecettesResponse<Texpand = unknown> = Required<RecettesRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	ingredients: IngredientsRecord
	recettes: RecettesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	ingredients: IngredientsResponse
	recettes: RecettesResponse
	users: UsersResponse
}