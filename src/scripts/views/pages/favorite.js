const favorite = {
  async render() {
    return `
        <section id='favorite'>
            <h1>Favorite Food</h1>
            <div class="card-container" id="card-container">
                
            </div>
        </section>
    `;
  },

  async afterRender() {
    /* eslint-disable no-console */
    console.log('hei');
  },
};

export default favorite;
