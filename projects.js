// Automatically generated project data
const projectsData = [
    {
        "id": "p20",
        "title": "Portfolio Backtester",
        "category": "Interactive Web Apps",
        "short_description": "Multi-asset portfolio simulation engine utilizing historical Yahoo Finance data and Monte Carlo projections.",
        "image_path": "public/images/p20.svg",
        "app_links": [
            "https://portfolio-backtester.streamlit.app/"
        ],
        "github_links": [],
        "pdf_links": [],
        "features": [
            "Multi-Asset Backtesting Engine: Simulates the performance of portfolios with multiple assets (stocks/ETFs) using historical data automatically fetched via Yahoo Finance.",
            "Flexible Rebalancing Strategies: Supports various rebalancing frequencies including Monthly, Quarterly, Yearly, or Every N Days, with options for custom asset weighting.",
            "Advanced Cost Modeling: Includes realistic simulation of trading frictions by allowing users to define Transaction Fees and Slippage (in basis points).",
            "Comprehensive Risk & Performance Metrics: Calculates a vast array of financial metrics including:",
            "Returns: Total Return, CAGR.",
            "Risk-Adjusted: Sharpe, Sortino, and Calmar Ratios.",
            "Tail Risk: Max Drawdown, VaR (Value at Risk) 95%/99%, and CVaR (Expected Shortfall).",
            "Statistical: Skewness, Kurtosis, and Hit Ratio.",
            "Benchmark Analysis: Compares portfolio performance against a user-defined benchmark (e.g., S&P 500) to compute Beta, Alpha, Correlation, and R-Squared.",
            "Rich Visualizations:",
            "Equity & Drawdown Curves: Interactive line charts (with Log Scale option) and underwater plots.",
            "Rolling Analysis: Dynamic charts for Rolling Volatility and Rolling Sharpe Ratio to assess stability over time.",
            "Heatmaps: Asset Correlation matrices and Monthly/Yearly Return grids.",
            "Monte Carlo Simulation: Performs forward-looking risk analysis using Geometric Brownian Motion (GBM) or Historical Bootstrap methods to forecast future potential paths and expected returns.",
            "Export & Reporting: Generates detailed automated text interpretations of performance and allows full data export (History, Metrics, Simulation results) to Excel."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button."
        ],
        "menu_title": "Portfolio Backtester (App)"
    },
    {
        "id": "p19",
        "title": "Volatility Surface Analyzer",
        "category": "Interactive Web Apps",
        "short_description": "Interactive 3D visualization and arbitrage scanning tool for implied volatility surfaces using Black-Scholes.",
        "image_path": "public/images/p19.svg",
        "app_links": [
            "https://advanced-volatility-surface-analyzer.streamlit.app/"
        ],
        "github_links": [],
        "pdf_links": [],
        "features": [
            "Advanced Volatility Engine: Calculates Implied Volatility (IV) using the Black-Scholes model (Newton-Raphson method) and generates realistic synthetic market data with configurable volatility skew, smile, and term structure.",
            "3D Surface Construction: Builds and visualizes interactive 3D Volatility Surfaces using Thin-Plate Spline or Linear interpolation algorithms.",
            "Comprehensive Arbitrage Detection: Automatically scans and flags specific market anomalies, including:",
            "Butterfly Arbitrage (Strike convexity violations)",
            "Calendar Arbitrage (Time monotonicity violations)",
            "Put-Call Parity violations",
            "Volatility Arbitrage (Negative variance/excessive gradients)",
            "Interactive Analytics: Features 2D plots for Volatility Smiles and Term Structure analysis, alongside an Arbitrage Intensity Heatmap.",
            "Real-Time Simulation: Includes a monitoring mode that simulates live spot price movements to detect new arbitrage opportunities dynamically.",
            "Professional Reporting: Displays advanced metrics (Surface Curvature, Skew intensity) and allows for data export (CSV/Excel/JSON)."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button."
        ],
        "menu_title": "Volatility Surface Analyzer (App)"
    },
    {
        "id": "p18",
        "title": "Investment Strategy Assignment",
        "category": "Research & Thesis",
        "short_description": "In this advanced university assignment, I conducted a comprehensive replication and comparative stress test of three distinct e...",
        "image_path": "public/images/p18.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [
            "public/pdfs/p18_Investment_Strategy.pdf"
        ],
        "features": [
            "Tree Clustering: I used Hierarchical Clustering to group the S&P 500 sectors into a dendrogram based on their correlation distance.",
            "Quasi-Diagonalization: I reorganized the covariance matrix to place similar assets closer together, enhancing stability.",
            "Recursive Bisection: I implemented a top-down capital allocation strategy, splitting weights recursively down the tree based on cluster variance."
        ],
        "paragraphs": [
            "In this advanced university assignment, I conducted a comprehensive replication and comparative stress test of three distinct eras of portfolio management theory. The project was structured as three separate \"works\" within a single framework, where I replicated the core algorithms from seminal academic papers to test whether theoretical sophistication translates to out-of-sample performance in the modern market.",
            "My analysis focused on the 11 GICS sectors of the S&P 500 (using SPDR ETFs) over a highly turbulent rolling window from mid-2018 to May 2025.",
            "Part 1: Replicating DeMiguel, Garlappi, & Uppal (2009) The Hypothesis: \"Optimal vs. Naive Diversification\"",
            "The first pillar of my work involved replicating the findings of DeMiguel et al., famously known as the \"1/N\" paper.",
            "The Theory: The authors argue that due to estimation errors in forecasting returns and covariances, sophisticated optimization models often fail to outperform a simple Equally Weighted portfolio out-of-sample.",
            "My Implementation: I constructed the \"Naive\" benchmark portfolio, rebalancing it to ensure equal capital allocation across all sectors regardless of their volatility or correlation.",
            "The Goal: This served as the \"null hypothesis\" of my study. If the complex models from Parts 2 and 3 could not beat this simple heuristic, they failed the test of practical utility.",
            "Part 2: Replicating Markowitz (1952) The Hypothesis: \"Mean-Variance Efficiency\"",
            "In the second part, I went back to the foundations of Modern Portfolio Theory to replicate Harry Markowitz's Mean-Variance Optimization (MVO).",
            "The Implementation: I coded the quadratic optimization problem to minimize portfolio variance for a target expected return. This involved solving the Lagrangian function to find the optimal weight vector w* based on the inverse of the covariance matrix.",
            "The Extension: I also implemented the Minimum Variance and Global Minimum Variance (GMVP) portfolios, which theoretically offer the lowest possible risk on the efficient frontier.",
            "The Flaw Tested: I specifically aimed to test the \"Markowitz Curse\"—the model's extreme sensitivity to inputs. By feeding it data from the COVID-19 crash and the 2022 bear market, I sought to observe how the \"error maximization\" property of the algorithm would handle ill-conditioned covariance matrices.",
            "Part 3: Replicating Lopez de Prado (2016) The Hypothesis: \"Hierarchical Risk Parity (HRP)\"",
            "For the final and most advanced part of the assignment, I replicated the machine-learning approach proposed by Marcos Lopez de Prado.",
            "The Innovation: De Prado argues that treating the correlation matrix as a complete graph (where every asset connects to every other asset) causes instability. Instead, he proposes using graph theory and machine learning to introduce a hierarchy.",
            "My Implementation: I built the HRP algorithm from scratch, following three distinct steps:",
            "The Comparative Results: A \"Horse Race\"",
            "I pitted these three methodologies against each other using a rolling-window framework (12 and 18 months) with varying rebalancing frequencies. To ensure statistical rigor, I evaluated the results using Block Bootstrapping to generate confidence intervals for the Sharpe and Sortino Ratios.",
            "The Verdict: The results of my replication confirmed the DeMiguel (Part 1) hypothesis.",
            "Correlation Breakdown: During the 2020 crisis, I observed that correlations between sectors spiked significantly, which violated the diversification assumptions of the Markowitz model.",
            "The Failure of Complexity: The Equally Weighted portfolio (Part 1) consistently ranked as the top performer. The Mean-Variance model (Part 2) suffered from estimation errors, leading to poor risk-adjusted returns. Even the machine-learning-based HRP (Part 3), while more stable than Markowitz, failed to outperform the naive benchmark during this specific period of high volatility.",
            "Alpha Analysis: Using the Jensen's Alpha regression, I proved that none of the optimization strategies generated statistically significant positive alpha relative to the market.",
            "This project demonstrated that while mathematical sophistication (Markowitz) and machine learning (HRP) offer theoretical elegance, in regimes of high correlation and uncertainty, the estimation error they introduce often outweighs their benefits compared to simple naive diversification."
        ],
        "menu_title": "Investment Strategy Project (Python)"
    },
    {
        "id": "p17",
        "title": "Testing Portfolio Models on the Sectors of the S&P 500",
        "category": "Research & Thesis",
        "short_description": "As a Quantitative Analyst within the Miura Financial Research team, I contributed to a rigorous empirical study designed to tes...",
        "image_path": "public/images/p17.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [
            "public/pdfs/p17_Testing_Portfolio_Models.pdf"
        ],
        "features": [],
        "paragraphs": [
            "As a Quantitative Analyst within the Miura Financial Research team, I contributed to a rigorous empirical study designed to test whether advanced portfolio construction methodologies could consistently outperform the S&P 500 benchmark. Our objective was to move beyond theoretical assumptions and evaluate how different allocation models perform when applied to the eleven GICS sectors of the S&P 500 (using SPDR ETFs) over a highly turbulent period from mid-2018 to May 2025.",
            "To ensure a robust analysis, we implemented a diverse range of optimization frameworks. We tested traditional approaches like Mean-Variance, Minimum Variance, and Equally Weighted portfolios against more sophisticated risk-based models, including Risk Parity, Volatility Parity, and the machine-learning-based Hierarchical Risk Parity (HRP) introduced by De Prado. To simulate real-world investment conditions, we avoided static backtests in favor of a rolling-window approach, utilizing estimation horizons of 12 and 18 months with both monthly and quarterly rebalancing frequencies.",
            "My analysis focused on evaluating these strategies using strict risk-adjusted metrics, including the Sharpe Ratio, Sortino Ratio, and the Probabilistic Sharpe Ratio (PSR), while employing block bootstrapping to account for the serial correlation in returns. We also tested for market timing skills using the Treynor-Mazuy and Henriksson-Merton models.",
            "The results of our study were revealing and highlighted the limitations of classical financial theory during regime shifts. We found that widely accepted models like Mean-Variance often failed to deliver superior risk-adjusted returns compared to the naive Equally Weighted strategy, which frequently ranked as the top performer. Our data showed that during periods of market stress—specifically the COVID-19 crash of 2020 and the 2022 downturn—correlations between sectors spiked significantly, eroding the diversification benefits that sophisticated models rely upon. Ultimately, our regression analysis demonstrated that none of the strategies were able to generate statistically significant positive alpha relative to the benchmark. This project underscored the difficulty of generating excess returns purely through sector allocation and demonstrated that in highly correlated, volatile market regimes, complex optimization can sometimes underperform simple heuristic diversification."
        ],
        "menu_title": "Testing Portfolio Models on S&P 500"
    },
    {
        "id": "p16",
        "title": "Critical Analysis of the Opening Range Breakout Strategy on QQQ (2004-2024)",
        "category": "Research & Thesis",
        "short_description": "In this independent project, I conducted a rigorous quantitative analysis to replicate and \"stress test\" the Opening Range Brea...",
        "image_path": "public/images/p16.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [
            "public/pdfs/p16_Opening_Range_Breakout.pdf"
        ],
        "features": [
            "Instrument: I replaced the QQQ ETF with Nasdaq E-mini Futures (NQ). This allowed me to leverage a halved relative spread and higher notional value ($440k per contract), drastically reducing commission impact and slippage.",
            "Signal Refinement: I rewrote the entry algorithm to include a filtering condition based on pre-market trend. I discovered that by analyzing \"price action\" in the last 5 minutes before the cash market open (09:25-09:30) on Futures, I could filter out false signals."
        ],
        "paragraphs": [
            "In this independent project, I conducted a rigorous quantitative analysis to replicate and \"stress test\" the Opening Range Breakout (ORB) strategy presented in academic literature by Zarattini & Aziz. My objective was not only to verify the model's theoretical validity but also to evaluate its robustness in a real-world market context by extending the data horizon to 2024 and introducing microstructure constraints often ignored in academic backtests.",
            "1. Baseline Replication and Signal Decay Analysis Using Python and libraries such as Pandas for financial time-series manipulation , I initially coded the core logic: entering long or short upon the breakout of the first 30-minute high/low on QQQ. By extending the backtest from 2004 to 2024, I uncovered a structural criticality that the original paper did not show: while the strategy performed consistently until 2021, its predictive power collapsed post-2021, completely flattening the profit curve. I calculated that, by isolating the recent period (2016-2023), the statistical edge shrank to just $0.04 per trade, a margin so thin it is virtually non-existent in a real trading environment.",
            "2. Risk Management and Dynamic Money Management Implementation To attempt to stabilize returns, I developed a custom risk management framework in Python (class trader ), introducing fixed Stop Losses on the opening candle's high/low and Take Profits with a 1:10 Risk/Reward ratio. Although this made the equity curve more linear , it did not generate alpha superior to simple Buy & Hold.",
            "Subsequently, I implemented the Money Management algorithm proposed by the authors, which sizes positions based on account size (1% risk per trade) and leverage. The backtest results exploded, growing the simulated capital from $25,000 to over $175,000. However, rather than blindly accepting this result, I analyzed the nature of these profits.",
            "3. Microstructure Analysis and Implicit Costs I identified the strategy's \"Achilles' heel\": performance was entirely driven by leverage and aggressive compounding, not signal quality. The algorithm required executing over 3,200 QQQ shares in a single market order at the open. Analyzing book depth (Level 2), I demonstrated that such volume is not executable at the \"best price\" at market open. By introducing a realistic simulation of slippage (2 cents on entry, 4 cents on exit) and institutional commissions into my code, the strategy's profitability vanished entirely, turning the theoretical profit into a net loss.",
            "4. Re-engineering: Futures and Pre-Market Filters Unwilling to abandon the concept, I redesigned the strategy to make it professionally executable.",
            "Conclusion This optimization more than doubled the average trade efficiency, increasing it from 7 to 15 cents per share, rendering the strategy potentially sustainable. This project demonstrates that a profitable theoretical backtest is only the beginning: real value added lies in the ability to model real execution constraints and engineer solutions (such as using derivatives and pre-market data) to transform an academic idea into an operating strategy."
        ],
        "menu_title": "Opening Range Breakout Strategy"
    },
    {
        "id": "p15",
        "title": "Fixed Income Project",
        "category": "Research & Thesis",
        "short_description": "In this project, I acted as the technical and operational bridge between the student team and our mentor, Costantino Forgione, ...",
        "image_path": "public/images/p15.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [
            "public/pdfs/p15_Fixed_Income.pdf"
        ],
        "features": [],
        "paragraphs": [
            "In this project, I acted as the technical and operational bridge between the student team and our mentor, Costantino Forgione, a former Managing Director at JPMorgan and Deutsche Bank. My primary contribution was twofold: I collaborated closely with Costantino to help the team execute the complex financial exercises, translating institutional pricing logic into solvable models, and I personally handled the entire LaTeX typesetting to ensure the final report met the rigorous presentation standards of a professional financial publication.",
            "The work itself offers a comprehensive analysis of fixed income securities, designed to bridge the gap between academic theory and the practical realities of trading desks. We started by investigating how the Italian tax regime and cash flow timing impact net yields, proving that identical nominal returns can result in significantly different after-tax performance. From there, we moved into complex valuation territory, modeling instruments with embedded options—such as the BTP Più puttable bond and step-down callable notes—to quantify the specific value of issuer and investor optionality. The project also addressed market microstructure by using live ETF order book data to assess liquidity execution costs , and it concluded with a deep dive into Asset-Backed Securities (ABS), where we designed tranching strategies to optimize risk and return for equity and senior investors. Ultimately, by combining Costantino’s elite market experience with my technical support in modeling and document engineering, we produced a practical framework valuable for private bankers and asset managers navigating today's complex interest rate environment."
        ],
        "menu_title": "Fixed Income Project"
    },
    {
        "id": "p14",
        "title": "Financial Econometrics Project",
        "category": "Research & Thesis",
        "short_description": "I completed an advanced econometrics assignment using MATLAB, combining rigorous theoretical exercises with extensive empirical...",
        "image_path": "public/images/p14.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [
            "public/pdfs/p14_Financial_Econometrics.pdf"
        ],
        "features": [],
        "paragraphs": [
            "I completed an advanced econometrics assignment using MATLAB, combining rigorous theoretical exercises with extensive empirical applications. The theoretical part included the derivation and evaluation of estimators, linear combinations and optimality conditions, multivariate regression model specification and OLS properties, joint hypothesis testing, large-sample approximations, and ARCH/GARCH models for time-varying volatility.The empirical section involved in-depth financial data analysis using real market data. It covered:- Computation and analysis of daily and monthly returns for the S&P 500 index and selected individual stocks- Volatility dynamics and distributional properties of returns- Performance analysis of Fama-French portfolios and factor models- Estimation and time-series testing of the CAPM (beta, alpha, and risk premium)- Cross-sectional regressions and model comparisons between CAPM and multi-factor models- ARMA-GARCH modeling with diagnostic testing (residual analysis, ACF/PACF, etc.)MATLAB was used throughout for simulation, estimation, and visualization, with code included in the final report."
        ],
        "menu_title": "Financial Econometrics Project (Matlab)"
    },
    {
        "id": "p13",
        "title": "Advanced Derivatives Analytics Platform",
        "category": "Interactive Web Apps",
        "short_description": "Pricing Models: Black-Scholes, binomial trees, Monte Carlo simulations.",
        "image_path": "public/images/p13.svg",
        "app_links": [
            "https://advanced-derivatives-analytics-platform.streamlit.app/"
        ],
        "github_links": [],
        "pdf_links": [],
        "features": [
            "Pricing Models: Black-Scholes, binomial trees, Monte Carlo simulations.",
            "Exotic Options: Asian, barrier, binary, lookback, and more.",
            "Risk Analysis: Greeks calculation, VaR, stress testing.",
            "Visualizations: Interactive plots (Plotly) for paths, payoffs, and sensitivities.",
            "Advanced Models: Jump diffusion, stochastic volatility, interest rate modeling."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button."
        ],
        "menu_title": "Derivatives Advanced Platform (App)"
    },
    {
        "id": "p12",
        "title": "Quantitative Stock Dashboard",
        "category": "Interactive Web Apps",
        "short_description": "Market Data Infrastructure:",
        "image_path": "public/images/p12.svg",
        "app_links": [
            "https://quantitative-stock-dashboard.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Quantitative-Stock-Dashboard/blob/main/app11.py"
        ],
        "pdf_links": [],
        "features": [
            "Real-time price feeds via Yahoo Finance API",
            "Historical OHLCV data (daily resolution)",
            "Corporate action adjustments (splits/dividends)",
            "Complete financial statements (income/balance/cash flow)",
            "35+ valuation metrics including:",
            "Trailing/forward P/E ratios",
            "Enterprise value multiples",
            "ROE/ROIC calculations",
            "Analyst recommendation tracking",
            "Customizable moving averages (SMA20/SMA50)",
            "Realized volatility calculations (20-day STD)",
            "Return decomposition (daily/monthly/annualized)",
            "Interactive price/volume charts",
            "Full options chain visualization",
            "Greeks calculation (Delta, Gamma, Vega)",
            "Put/call open interest analysis",
            "Implied volatility surfaces",
            "Institutional holder tracking",
            "Insider transaction filings",
            "Float-adjusted ownership percentages",
            "Sustainability score reporting",
            "Governance factor analysis",
            "Industry-relative ESG rankings",
            "Security Setup (Sidebar):",
            "Input ticker symbol (e.g., AAPL, TSLA)",
            "Set analysis timeframe (start/end dates)",
            "Select data frequency (daily/weekly/monthly)",
            "Company Overview:",
            "Review business profile (sector/industry/country)",
            "Analyze valuation metrics table",
            "Monitor key ratios vs. historical ranges",
            "Price Analysis:",
            "View interactive price chart with SMA overlays",
            "Hover for timestamped price/volume data",
            "Adjust chart timeframe (1M/3M/YTD/5Y)",
            "Financial Statement Review:",
            "Expand income statement/balance sheet/cash flow sections",
            "Sort by period (annual/quarterly)",
            "Download data via screenshot/copy-paste",
            "Options Analysis:",
            "Select expiration date from available chains",
            "Review call/put strike distributions",
            "Analyze open interest and volume patterns",
            "Advanced Analytics:",
            "Calculate 20-day historical volatility",
            "Compare returns across time horizons",
            "Backtest simple trading strategies"
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "Market Data Infrastructure:",
            "Fundamental Analysis Suite:",
            "Technical Analysis Toolkit:",
            "Derivatives Analytics:",
            "Ownership Monitoring:",
            "ESG Integration:"
        ],
        "menu_title": "Quantitative Stock Dashboard (App)"
    },
    {
        "id": "p11",
        "title": "EUR/PLN Monitor Pro",
        "category": "Interactive Web Apps",
        "short_description": "Real-Time Rate Engine:",
        "image_path": "public/images/p11.svg",
        "app_links": [
            "https://eur-pln-monitor-pro.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/EUR-PLN-Monitor-Pro/blob/main/app10.py"
        ],
        "pdf_links": [],
        "features": [
            "Continuously polls Yahoo Finance API for live EUR/PLN rates",
            "60-second refresh cycle with timestamped updates",
            "Bidirectional conversion calculator (PLN↔EUR)",
            "Adjustable timeframes (7D to 20Y)",
            "7-day moving average overlay",
            "Period high/low detection with difference calculations",
            "Event-driven volatility analysis",
            "Scenario modeling for ±10% rate fluctuations",
            "Dual-case analysis (Polish income/EU tourist budgets)",
            "Difference tracking in both base and quote currencies",
            "Linear regression-based projections (7-90 day horizons)",
            "Daily trend coefficient calculation",
            "Confidence interval visualization",
            "Pre-loaded economic events (2004 EU accession to 2022 Ukraine conflict)",
            "Automated rate change percentage calculations",
            "Visual timeline comparison interface",
            "Dynamic English/Polish language switching",
            "Culturally adapted financial terminology",
            "Consistent decimal formatting (4-place precision)",
            "Input Parameters (Sidebar):",
            "Select analysis mode (Dashboard/Impact/Forecast/Events)",
            "Choose timeframe (7D/30D/90D/1Y/5Y/Max)",
            "Toggle language (EN/PL)",
            "Dashboard Operation:",
            "Monitor real-time rate in metric panel",
            "Hover interactive chart for historical rates",
            "View key metrics (7D change, period extremes)",
            "Impact Calculations:",
            "Enter PLN salary or EUR budget amounts",
            "Review conversion scenarios at current ±10% rates",
            "Analyze difference metrics in output table",
            "Forecast Modeling:",
            "Adjust projection horizon (7-90 day slider)",
            "Review trend direction and daily change coefficient",
            "Compare forecasted range against current rate",
            "Event Analysis:",
            "Select from 7 historical economic events",
            "View pre/post-event rate trajectories",
            "Analyze percentage changes during event periods"
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "Real-Time Rate Engine:",
            "Historical Analysis Module:",
            "Impact Simulation System:",
            "Quantitative Forecasting:",
            "Event Study Framework:",
            "Bilingual Interface:"
        ],
        "menu_title": "EUR/PLN Monitor Pro (App)"
    },
    {
        "id": "p10",
        "title": "Options Pricing",
        "category": "Interactive Web Apps",
        "short_description": "Black-Scholes Option Pricing",
        "image_path": "public/images/p10.svg",
        "app_links": [
            "https://options-pricing-bs---heatmap.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Options-Pricing-BS---Heatmap/blob/main/app8.py"
        ],
        "pdf_links": [],
        "features": [
            "Computes theoretical prices for European call and put options using the closed-form Black-Scholes formula.",
            "Supports all standard inputs:",
            "Underlying asset price (S)",
            "Strike price (K)",
            "Time to maturity (T)",
            "Implied volatility (σ)",
            "Risk-free interest rate (r)",
            "Calculates first- and second-order sensitivities:",
            "Delta (Δ) – Price sensitivity to underlying asset movements.",
            "Gamma (Γ) – Rate of change of Delta.",
            "Vega (ν) – Sensitivity to volatility changes.",
            "Theta (Θ) – Time decay effect.",
            "Rho (ρ) – Sensitivity to interest rate changes.",
            "Generates interactive heatmaps to visualize:",
            "Price sensitivity across a range of underlying prices (spot range).",
            "Impact of volatility changes (σ range) on option premiums.",
            "Call and put price surfaces displayed in separate heatmaps for comparative analysis.",
            "Clean, responsive dashboard optimized for financial analytics.",
            "Real-time updates on parameter adjustments.",
            "Annotated heatmaps with precise numerical values for quantitative analysis.",
            "Adjustable bounds for sensitivity analysis:",
            "Minimum/maximum underlying price (S_min, S_max).",
            "Minimum/maximum volatility (σ_min, σ_max).",
            "Supports both default and user-defined ranges",
            "Input option parameters in the sidebar:",
            "Set Underlying Price (S), Strike Price (K), and Time to Maturity (T).",
            "Adjust Volatility (σ) and Risk-Free Rate (r) via sliders or manual entry.",
            "Option Premiums:",
            "Call and put prices displayed in structured metric cards.",
            "Greeks values presented alongside for risk assessment.",
            "Heatmap Analysis:",
            "X-axis: Underlying price range (spot sensitivity).",
            "Y-axis: Volatility range (volatility sensitivity).",
            "Color gradient indicates option price magnitude.",
            "Modify spot and volatility ranges to test different market scenarios.",
            "Observe how Delta and Gamma change with moneyness (ITM, ATM, OTM).",
            "Assess Theta decay and Vega exposure under varying conditions.",
            "Trading & Risk Management:",
            "Estimate fair value for European options.",
            "Hedge positions using Greeks (e.g., Delta-neutral strategies).",
            "Education & Research:",
            "Demonstrate non-linear pricing effects (e.g., volatility smile).",
            "Visualize convexity (Gamma) and time decay (Theta) in option pricing.",
            "All calculations update in real-time upon parameter changes.",
            "Heatmaps use plasma colormap for optimal contrast in price visualization.",
            "Supports both percentage and absolute value inputs for flexibility."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "Black-Scholes Option Pricing",
            "Option Greeks Calculation",
            "Dynamic Sensitivity Analysis",
            "Professional Financial Interface",
            "Customizable Parameter Ranges",
            "1. Model Configuration",
            "2. Results Interpretation",
            "3. Sensitivity Analysis",
            "Applications",
            "Technical Notes"
        ],
        "menu_title": "Options Pricing - Heatmap (App)"
    },
    {
        "id": "p9",
        "title": "Options Trading Strategy Simulator with Black-Scholes Model",
        "category": "Interactive Web Apps",
        "short_description": "1. Set Option Parameters (Sidebar):",
        "image_path": "public/images/p9.svg",
        "app_links": [
            "https://trading-options-using-bs.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Trading-Options-Using-BS/blob/main/app7.py"
        ],
        "pdf_links": [],
        "features": [
            "Black-Scholes Option Pricing:",
            "Calculates theoretical prices for European call/put options using the Black-Scholes model, accounting for volatility, risk-free rates, and time decay.",
            "Strategy Simulation (Long/Short):",
            "Tests buying (long) or selling (short) strategies for calls/puts.",
            "Visualizes profit/loss scenarios for single price paths with color-coded outcomes.",
            "Monte Carlo Analysis:",
            "Runs 1,000–100,000 simulations to:",
            "Model potential future price paths using Geometric Brownian Motion.",
            "Generate probability distributions for strategy P/L.",
            "Plot cumulative equity curves for repeated trades.",
            "Market Edge Detection:",
            "Compares theoretical Black-Scholes prices with market quotes to identify:",
            "Overpriced options (potential selling opportunities).",
            "Underpriced options (potential buying opportunities).",
            "Interactive Risk Analytics:",
            "Dynamic charts show strike prices, breakeven points, and max profit/loss.",
            "Toggle between call/put and adjust parameters in real time.",
            "Educational Tools:",
            "Expandable Black-Scholes formula explanations.",
            "Model limitations section highlighting assumptions (constant volatility, no dividends, etc.).",
            "Option Type: Select Call or Put.",
            "Strategy Direction: Choose Buy (Long) or Sell (Short).",
            "Stock Price (S): Current price of the underlying asset (e.g., $100).",
            "Strike Price (K): Option exercise price (e.g., $100).",
            "Volatility (σ): Annualized volatility (e.g., 30% for tech stocks).",
            "Risk-Free Rate (r): Interest rate (e.g., 0.05 for 5%).",
            "Time to Maturity (T): Years until expiration (e.g., 1.0).",
            "Market Price: Current option ask price (e.g., $14.10).",
            "Single-Path Simulation: Instantly visualizes P/L for one price trajectory.",
            "Monte Carlo: Click \"Run Monte Carlo Simulation\" to analyze strategy performance across thousands of scenarios.",
            "Theoretical Edge: Positive/Negative values indicate mispricing.",
            "P/L Distribution: Histogram shows profit probability.",
            "Equity Curve: Tracks cumulative gains/losses over repeated trades."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "1. Set Option Parameters (Sidebar):",
            "2. Run Simulations:",
            "3. Interpret Results:",
            "4. Compare Strategies:",
            "Adjust parameters (e.g., volatility, strike price) to see how P/L changes dynamically.",
            "5. Export Data (Optional):",
            "Use screenshots or manual recording for strategy backtesting."
        ],
        "menu_title": "Options Trading Strategy with BS (App)"
    },
    {
        "id": "p8",
        "title": "BSc Thesis - Invesco Asset Management",
        "category": "Research & Thesis",
        "short_description": "Analysis of thematic investment funds and consumer trends, developed during BSc thesis with Invesco Asset Management.",
        "image_path": "public/images/p8.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [
            "public/pdfs/p8_BSc_Thesis_Invesco.pdf"
        ],
        "features": [
            "Thematic Investment Funds",
            "Explores the history, evolution, and global adoption of thematic investing, breaking down the development in key regions like the US, Europe, and emerging markets.",
            "Analyzes the strengths, weaknesses, and risks of thematic funds and their role in portfolio diversification.",
            "Key Consumer Sectors",
            "A detailed examination of consumer goods sectors driving global trends, including technology, e-commerce, entertainment, travel, luxury, automobiles, transportation, and health.",
            "Case studies of industry leaders like Tesla, Netflix, and Amazon, alongside analyses of broader sectoral shifts such as AI integration and post-pandemic consumer behavior.",
            "Analysis of the Invesco Global Consumer Trends Fund",
            "Focuses on the fund’s investment philosophy, portfolio composition, historical performance, and cost structure.",
            "Conducts a performance analysis over multiple timeframes, highlighting key periods such as the fund’s substantial outperformance during 2020-2021 and its challenges in 2022 due to geopolitical events.",
            "Compares the fund with other major players in the consumer trends sector, identifying differentiating factors and strategic advantages.",
            "Discusses the impact of AI on consumer goods, drawing from a private presentation by Greg Holland, one of the fund’s managers, which I attended during the project."
        ],
        "paragraphs": [
            "106 pages - English Language",
            "My thesis, titled “Thematic Investment Funds: A Case Study of the Invesco Global Consumer Trends Fund,” represents an in-depth exploration of the rapidly evolving landscape of thematic investments, with a particular focus on consumer trends. The project was enriched by a direct collaboration with the Italian branch of Invesco Ltd., offering me exclusive access to valuable data and insights on one of their flagship funds—an actively managed vehicle boasting over $2.275 billion in assets under management and a robust history of outperforming its benchmark.",
            "The thesis is structured into three main chapters:",
            "The collaboration with Invesco was pivotal in elevating the quality of my research. By analyzing proprietary data on the fund's portfolio allocation over five years, I was able to pinpoint key drivers of performance and connect them to broader market trends. Furthermore, the private presentation on AI and consumer trends gave me firsthand exposure to the intersection of innovation and investment, reinforcing the practical significance of my research.",
            "This thesis has been a journey of bridging academic rigor with real-world applications, offering insights into the complexities and opportunities of thematic investing while sharpening my analytical, critical thinking, and financial modeling skills."
        ],
        "menu_title": "BSc Thesis with Invesco Asset Management"
    },
    {
        "id": "p7",
        "title": "Portfolio Return Calcolator (after crises)",
        "category": "Interactive Web Apps",
        "short_description": "Portfolio Allocation: Choose from a selection of asset classes, including major stock indices (S&P 500, MSCI World, etc.), bond...",
        "image_path": "public/images/p7.svg",
        "app_links": [
            "https://portfolio-return-calculator-after-crises.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Portfolio-Return-Calculator-after-crises/blob/main/app4.py"
        ],
        "pdf_links": [],
        "features": [
            "Portfolio Allocation: Choose from a selection of asset classes, including major stock indices (S&P 500, MSCI World, etc.), bonds, and commodities.",
            "Historical Crisis Analysis: Calculate portfolio returns based on the start of key economic crises such as the 2008 financial crisis, the 2010 European sovereign debt crisis, Brexit in 2016, the 2020 COVID-19 pandemic, and the 2022 Russia-Ukraine war.",
            "Customizable Allocations: Adjust portfolio weights to suit specific investment strategies and calculate returns accordingly.",
            "Time Horizon Selection: Analyze portfolio performance based on data from different start dates, aligned with historical crises, to see how each asset performed during each event.",
            "Performance Data: Visualize and explore asset performance during crises with interactive charts.",
            "Return Calculations: Get average annual returns based on historical data from Yahoo Finance and calculate the impact of asset allocations during crises.",
            "Set Up Your Portfolio: Choose the assets you want to include in your portfolio and allocate a percentage to each asset. The sum of all allocations must equal 100%.",
            "Choose a Crisis Event: Select a start date corresponding to a major economic crisis. This determines the time period over which performance is analyzed.",
            "View Historical Performance: View a detailed analysis of asset returns, including performance metrics during crises and visual charts.",
            "Download Results: For a more in-depth review, download the performance data and crisis details in a user-friendly format."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button."
        ],
        "menu_title": "Portfolio Return Calcolator (App)"
    },
    {
        "id": "p6",
        "title": "Koi Asset Management",
        "category": "Leadership & Initiatives",
        "short_description": "Student association bridging quantitative finance and behavioral psychology, managing a dynamic ETF virtual fund.",
        "image_path": "public/images/p6.svg",
        "app_links": [
            "https://www.linkedin.com/company/koi-asset-management/"
        ],
        "github_links": [],
        "pdf_links": [],
        "features": [
            "Systematic Asset Allocation: Implemented a custom allocation formula based on investor age and the Federal Reserve interest rate.",
            "Behavioral Finance Focus: Investigated the intersection of psychology and economics, exploring cognitive biases in financial markets.",
            "Performance Excellence: Achieved +5.70% returns in the virtual fund, outperforming the S&P 500 and MSCI World benchmarks.",
            "Weekly Research: Published briefings on macroeconomic events, central bank policies, and sector-specific asset selection."
        ],
        "paragraphs": [
            "Koi Asset Management is a student-led financial association created to engage members with quantitative finance while bridging the gap between psychology and economics, exploring how cognitive biases and behavioral patterns influence investment decisions.",
            "The platform manages the Koi Long Term Fund, a dynamic virtual asset allocation model designed to optimize returns while actively managing risk. Portfolio weights are adjusted based on age-related risk tolerance and interest rate expectations using a systematic formula: Equity Allocation (%) = 125 - 20 * (Age) - 5 * (Fed Rate).",
            "For the winter period (Nov 2024 - Jan 2025), the fund achieved a 5.70% return, outperforming the S&P 500 (5.61%) and MSCI World (4.57%) benchmarks with lower drawdown. The association hosts weekly market updates and workshops to train analysts in behavioral finance."
        ],
        "menu_title": "Koi Asset Management"
    },
    {
        "id": "p5",
        "title": "SF Bicocca US Alpha Fund",
        "category": "Leadership & Initiatives",
        "short_description": "Role as Portfolio Manager for a virtual fund at Starting Finance Bicocca Club, scaling the division to 100+ members.",
        "image_path": "public/images/p5.svg",
        "app_links": [
            "https://www.linkedin.com/company/starting-finance/"
        ],
        "github_links": [],
        "pdf_links": [],
        "features": [
            "Strategic Portfolio Management: Founded and managed a virtual S&P 500-beating fund, achieving a +1.52% positive alpha.",
            "Division Leadership: Scaled the Starting Finance Bicocca Portfolio Management division from 5 to over 100 active members.",
            "Mentoring & Training: Mentored 90+ junior analysts in macroeconomic, fundamental, and quantitative analysis, organizing workshops.",
            "Risk Management: Maintained strict limit controls, capping the maximum drawdown of the sector-diversified portfolios to -8.5%."
        ],
        "paragraphs": [
            "As the Head of the Portfolio Management Division, I founded and managed the SF Bicocca Alpha Fund—a virtual fund designed to systematically outperform the S&P 500 index. I scaled the division from an initial group of 5 members to a structured team of 100+ active members, organized into 11 GICS sector-specific analyst teams.",
            "My role involved training 90+ junior analysts in quantitative analysis, financial modeling, and fundamental stock selection, defining the macro asset allocation strategy, and mentoring team leaders in conducting sector analysis.",
            "During my tenure, the fund achieved +1.52% alpha relative to the S&P 500 index with a maximum drawdown restricted to -8.5%, demonstrating robust risk-adjusted returns during turbulent market regimes."
        ],
        "menu_title": "SF Bicocca Alpha Fund"
    },
    {
        "id": "p4",
        "title": "Asian Options Pricing",
        "category": "Research & Thesis",
        "short_description": "This project focuses on the application and comparison of several option pricing models, specifically:",
        "image_path": "public/images/p4.svg",
        "app_links": [],
        "github_links": [],
        "pdf_links": [],
        "features": [
            "Binomial Model",
            "Black-Scholes Model",
            "Trinomial Model",
            "Monte Carlo Simulation (with and without variance reduction)",
            "Asian Options (Geometric and Arithmetic Average)",
            "Barrier Options (Knock-In and Knock-Out)",
            "Binary Options (Asset-or-Nothing and Cash-or-Nothing)",
            "Risk-Free Rate (r) and Volatility (σ) Estimation",
            "Retrieve risk-free rates from data providers like FactSet or Bloomberg.",
            "Consider two scenarios: crisis and expansion, each with different rrr and σ\\sigmaσ.",
            "Estimate volatility using historical data, with separate values for positive and negative market periods.",
            "Black-Scholes Formula Development",
            "Implement Python functions for pricing Barrier and Binary Options using closed-form solutions.",
            "Focus on European-style calls for Barrier Options, including Up-and-In, Up-and-Out, Down-and-In, and Down-and-Out types.",
            "Monte Carlo Simulation for Barrier and Binary Options",
            "Develop Python functions to generate sample paths using the Geometric Brownian Motion (GBM) process.",
            "Include variance reduction techniques, such as antithetic variables.",
            "Binomial and Trinomial Models",
            "Implement Binomial and Trinomial Tree Models in Python for Barrier and Binary Options.",
            "Asian Options Pricing",
            "Use Monte Carlo methods for Geometric and Arithmetic Asian Options.",
            "Implement the closed-form Black-Scholes solution for Arithmetic Asian Options."
        ],
        "paragraphs": [
            "This project focuses on the application and comparison of several option pricing models, specifically:",
            "The primary objective is to compare the prices obtained through these models and analyze their convergence under various scenarios. The results will be documented in a comprehensive written report.",
            "The project explores exotic options such as:",
            "The underlying assets considered are non-dividend-paying stocks.",
            "In conclusion, our study highlights the importance of variance reduction techniques in pricing Asian options, significantly lowering standard errors, especially for in-the-money options. Volatility estimation plays a crucial role, as discrepancies can impact pricing, particularly for out-of-the-money options. For barrier options, we combined lattice-based models with Monte Carlo simulations, using interpolation to improve accuracy. In pricing binary options, Monte Carlo with antithetic variates outperformed lattice models. Overall, volatility estimation remains key to accurate pricing. Despite the complexities of these options, understanding pricing techniques can provide valuable opportunities for risk management and profit optimization."
        ],
        "menu_title": "Esotic Options Pricing"
    },
    {
        "id": "p3",
        "title": "Advanced Bond Analytics Tool",
        "category": "Interactive Web Apps",
        "short_description": "Select an analysis type, input parameters, and visualize results via interactive charts and metrics. Ideal for traders, portfol...",
        "image_path": "public/images/p3.svg",
        "app_links": [
            "https://advanced-bond-analytics-tool.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Bond-Calculator-and-Comparator/blob/main/app3.py"
        ],
        "pdf_links": [],
        "features": [
            "Bond Pricing & Analytics: Price, yield, duration, convexity for various bond types (callable, puttable, floating-rate, etc.).",
            "Portfolio Analysis: Weighted metrics, risk decomposition, and scenario testing for bond portfolios.",
            "Yield Curve Analysis: Interpolation (Nelson-Siegel, cubic spline), forward rates, and stress testing.",
            "Risk Metrics: Credit VaR, duration/convexity risk, liquidity-adjusted pricing.",
            "Credit Risk Analysis: PD/LGD modeling, CreditMetrics/CreditRisk+ frameworks, credit spreads.",
            "Bond Comparison Tool: Relative value scoring, risk-return profiling, and scenario-based performance."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "Select an analysis type, input parameters, and visualize results via interactive charts and metrics. Ideal for traders, portfolio managers, and fixed-income analysts."
        ],
        "menu_title": "Bonds Analysis (App)"
    },
    {
        "id": "p2",
        "title": "Investment Growth Calulator",
        "category": "Interactive Web Apps",
        "short_description": "Once the application is running, follow these steps to use it:",
        "image_path": "public/images/p2.svg",
        "app_links": [
            "https://investment-calculator-compound-interest.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Investment-Calculator-Compound-Interest/blob/main/app2.py"
        ],
        "pdf_links": [],
        "features": [
            "Investment Calculation: Calculates the future value of investments based on initial capital, monthly contributions, and compound interest.",
            "Inflation Adjustment: Adjusts the future value of the investment for inflation, providing the real value of the investment.",
            "Multiple Investment Metrics: Provides key investment metrics like total invested, real invested value, non-invested capital, and more.",
            "Interactive Visualization: View the investment growth over time with interactive graphs showing the nominal and real values.",
            "Customizable Input: Adjust the initial investment, monthly contribution, annual return, inflation rate, and the number of years for calculation",
            "Enter Initial Investment: In the sidebar, input your initial investment amount (e.g., 10,000€).",
            "Enter Monthly Contribution: Input the monthly amount you plan to contribute to the investment.",
            "Select Annual Return Rate: Use the slider to choose your expected annual return rate (e.g., 7%).",
            "Select Inflation Rate: Adjust the annual inflation rate that will be applied to the real value of your investment.",
            "Choose Years to Calculate: Select the number of years for which you want to calculate your investment's future value.",
            "View Results: The app will display a table with your investment's future value, adjusted for inflation, and generate an interactive chart showing the investment's growth over time."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "Once the application is running, follow these steps to use it:"
        ],
        "menu_title": "Investment Growth Calculator (App)"
    },
    {
        "id": "p1",
        "title": "Stock Insights: Prediction & Technical Analysis",
        "category": "Interactive Web Apps",
        "short_description": "Once the application is running, follow these steps to use it:- Enter Stock Ticker: In the sidebar, input the stock ticker symb...",
        "image_path": "public/images/p1.svg",
        "app_links": [
            "https://stock-insights-prediction-analysis.streamlit.app/"
        ],
        "github_links": [
            "https://github.com/LucaGirlando/Stock-Insights-Prediction-Analysis/blob/main/app1.py"
        ],
        "pdf_links": [],
        "features": [
            "Stock Prediction with Prophet:Uses the Prophet model to forecast future stock prices based on historical adjusted close prices.Forecasts can be made for a specified number of years and visualized with uncertainty intervals.",
            "Comparison with Other Stocks:Allows comparison of the main stock's performance with up to 5 additional tickers over the same time period.Visualizes the comparison in a Plotly chart for easy comparison of price movements.",
            "Technical Indicators:Includes popular technical indicators like Simple Moving Average (SMA), Exponential Moving Average (EMA), and Bollinger Bands.Uses Plotly for dynamic and interactive visualizations of these indicators alongside the stock price.",
            "Ichimoku Cloud:Implements the Ichimoku Cloud analysis, which defines support and resistance levels, identifies trends, and provides buy/sell signals using 5 key lines.",
            "Descriptive Statistics and Correlation Analysis:Calculates basic descriptive statistics for the selected stock, such as mean, median, standard deviation, etc.Performs correlation analysis with other stocks or indices for comparison.",
            "Monte Carlo Simulation:Provides a Monte Carlo simulation to model the future stock price under random scenarios based on historical price data.Generates multiple potential future outcomes and visualizes the probability distribution of the stock price.",
            "Enter Stock Ticker:Users input a stock ticker (default is \"AAPL\") to start the analysis.",
            "Select Prediction Parameters:The user selects the number of years to predict (1 to 4 years) and the historical data range for analysis (10, 20, 30, or 40 years).",
            "Comparison with Other Stocks:Users can input up to 5 other stock tickers for comparison by entering comma-separated values (e.g., \"MSFT, GOOGL\").",
            "Visualizing the Forecast and Indicators:Once data is fetched, users can view the stock forecast, technical indicators, and Ichimoku Cloud analysis through interactive Plotly charts.",
            "Descriptive Statistics and Correlation:Users can get summary statistics and correlations between the selected stock and other tickers, providing insights into relationships and stock volatility.",
            "Monte Carlo Simulation:Users can visualize multiple potential future outcomes for stock price using Monte Carlo simulation."
        ],
        "paragraphs": [
            "If the app is \"sleeping,\" press the \"Yes, get this app back up!\" button.",
            "Once the application is running, follow these steps to use it:- Enter Stock Ticker: In the sidebar, input the stock ticker symbol (e.g., AAPL for Apple Inc.)."
        ],
        "menu_title": "Stocks Insights (App)"
    }
];
