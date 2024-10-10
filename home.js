// Route to handle search query
app.get('/api/search', async (req, res) => {
    const query = req.query.query;
  
    if (!query) {
      return res.status(400).json({ message: 'No search query provided.' });
    }
  
    try {
      // Use a case-insensitive regular expression to match the query with food items or location
      const searchResults = await Order.find({
        $or: [
          { foodItem: { $regex: query, $options: 'i' } },  // Search by food item
          { location: { $regex: query, $options: 'i' } }   // Search by location
        ]
      });
  
      res.json(searchResults); // Send back the search results to the frontend
    } catch (error) {
      res.status(500).json({ message: 'Error occurred while searching.', error: error.message });
    }
  });
  