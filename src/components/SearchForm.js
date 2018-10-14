handleSubmit(e) {
    e.preventDefault();
    return superagent.get(`${__API_URL__}/api/flights/${ this.state.from }/${ this.state.to }`)
      .then(res => {
        this.setState({
          flights: [...res.body],
          hasSearched: true,
        });
      }).catch(err => {
        this.setState({
          hasError: true,
        });
      });
  }