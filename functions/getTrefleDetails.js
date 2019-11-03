const axios = require('axios')

const api = 'https://trefle.io/api/plants?scientific_name='

const trefleKey = 'OFkwc2FiR2RYVGwxcFpPVEROOUJXZz09'
// const trefle_key = process.env.TREFLE_API_KEY

const headers = {
  Authorization: 'Bearer ' + trefleKey
}

exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || undefined

  if (!name) {
    return {
      statusCode: 400,
      body: JSON.stringify('you must supply a plant name')
    }
  }

  try {
    // search for the plant by scientific name
    const response = await axios.get(api + name, { headers })

    // if found the result contains the url of the detail page for the plant
    const detailUrl = response.data[0].link

    // fetch the detail page
    const details = await axios.get(detailUrl, { headers })

    return {
      statusCode: 200,
      body: JSON.stringify(details.data)
    }
  } catch (e) {
    return {
      statusCode: 404,
      body: JSON.stringify('plant not found')
    }
  }
}
