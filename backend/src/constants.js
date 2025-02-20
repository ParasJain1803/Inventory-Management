export class PublicData {
    static port = process.env.PORT || 3000
    static mongo_uri = process.env.MONGO_URI || 'mongodb://localhost/inventory';
    
}
