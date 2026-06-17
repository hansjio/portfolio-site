const BLOG_POSTS = {
  'homeEcon-study': {
    title: 'Beyond the Data: Why I Studied Household Economics & School Enrollment in the Philippines',
    date: 'Dec 15, 2025',
    readtime: '6 min read',
    category: 'Data Science',
    tags: ['education', 'poverty', 'data-mining', 'social-impact'],
    body: `
      <p>Data science is often spoken of in the abstract—as an exercise in building the most accurate decision tree, tuning hyper-parameters, or maximizing an F1-score. But for my final project for my Data Mining and Business Intelligence subject during the first semester of my third year, the numbers on my screen weren't just data points. They were faces I grew up with.</p>

      <h2>The Budget at the Kitchen Table</h2>
      <p>I grew up in a household where budgeting was not a choice, but a daily negotiation for survival. I still remember the quiet anxiety of watching my parents sit at the kitchen table, manually calculating utility bills, balancing the cost of medicine against the price of rice, and making quiet sacrifices so that I could have school supplies. In our neighborhood, education was spoken of as the great equalizer, the ticket out of the cycle. But the reality on the street told a different story.</p>
      
      <p>When Senior High School (SHS) was introduced in the Philippines, it was supposed to allow students to specialize in tracks like STEM (Science, Technology, Engineering, and Math) or ABM (Accountancy, Business, and Management). But I watched childhood friends—bright, curious minds who dreamed of becoming engineers or running enterprises—forced to settle. Their local public schools didn't offer specialized tracks, and their families couldn't afford the travel expenses, books, or uniform costs required to attend schools that did. They were pushed into the General Academic Strand (GAS), or they dropped out entirely to work. Their dreams were decided not by their potential, but by their household budget.</p>

      <h2>The Study: FIES and DepEd Integration</h2>
      <p>When the time came to choose our project for this curriculum, I didn't want to analyze corporate clickstreams or predict financial stock trends. I wanted to use data mining to look at the systemic forces behind these broken dreams. Using the CRISP-DM framework, we integrated the national <strong>Filipino Family Income and Expenditure Survey (FIES)</strong> with regional basic education enrollment records from the <strong>Department of Education (DepEd)</strong>, mapping the socioeconomic profiles of households against the track choices of <strong>26.24 million students</strong> across all 17 administrative regions.</p>

      <h3>The Ultimate Predictor: Food Share</h3>
      <p>When we trained our Decision Tree classifier, we expected family income or parental education to be the primary branching criteria. Instead, the algorithm revealed a deeper, more painful truth: the strongest predictor of a region's SHS track choice was <strong>Food Share</strong>—the percentage of the household budget spent purely on putting food on the table.</p>

      <p>In regions where households spend a disproportionately high share of their income on food, enrollment leans heavily toward the General Academic Strand (GAS). When a family must allocate more than half of its earnings just to stave off hunger, specialized education becomes an unaffordable luxury. Specialized tracks like STEM and ABM require laboratory fees, computer access, and materials that are heavily concentrated in private schools or major urban centers, making them financially out of reach. In fact, our models showed that a high concentration of STEM enrollees made the academic sector <strong>38.66 times more likely to be private</strong>.</p>

      <h2>More Than a Dashboard</h2>
      <p>This study is not just an academic requirement. Every node in our decision tree, every cell in our Pearson correlation matrix, and every visualization on our Power BI dashboard represents a real child in the provinces whose educational future is constrained by the price of a plate of food. We proved mathematically what poor families have known for generations: you cannot learn if you are struggling to eat, and you cannot choose your future if your present is consumed by survival.</p>

      <blockquote>We built this project to give a voice to these silent numbers. Data science must be more than optimization; it must be a mirror held up to society, demanding that we build a world where a child's dreams are never limited by the share of income spent on their next meal.</blockquote>
    `
  }
};
