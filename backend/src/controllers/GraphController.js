const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const graph = await connection('graph').select('*');

        return response.json(graph);
    },

    async fixesList(request, response) {
        const options = [
            {
                value:1,
                description:"Energético"
              },
              {
                value:2,
                description:"Café"
              },
              {
                value:3,
                description:"Cigarro"
              },
              {
                value:4,
                description:"Maconha"
              },
              {
                value:5,
                description:"Cocaína"
              },
              {
                value:6,
                description:"Álcool"
              },
              {
                value:7,
                description:"Outro"
              },
        ];

        return response.json(options);
    },
 
    async create(request, response) {
        const {option} = request.body;
    
        await connection('graph').insert({
            option
        });
    
         return response.json({ option });
    }
}