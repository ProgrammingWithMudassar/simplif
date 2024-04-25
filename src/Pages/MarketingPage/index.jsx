import React from "react";
import { Header, Footer, Wrapper } from "../../Components/index.js";
import { Box, Typography, Button } from "@mui/material";
import profile_page from '../../Assets/png/MarketingPage/profile_page.png'
import superhero from '../../Assets/png/MarketingPage/superhero.png'
import collaboration from '../../Assets/png/MarketingPage/collaboration.png'
import crowdfunding from '../../Assets/png/MarketingPage/crowdfunding.png'
import hashtag from '../../Assets/png/MarketingPage/hashtag.png'
import '../style.css'

const MarketingPage = () => {
    const cards = [
        {
            image: superhero,
            title: "Get Brand Deals",
            description: "Create your profile and let brands discover you on our marketplace."
        },
        {
            image: hashtag,
            title: "Instant Payment",
            description: "No more hassle chasing for payments. We pay you instantly."
        },
        {
            image: crowdfunding,
            title: "Fully Automated",
            description: "You create Content. We`ll handle everything else."
        },
        {
            image: collaboration,
            title: "No Contracts Tied ",
            description: "We're not a marketing agency; instead, you have full freedom to leave whenever."
        }
    ];
    return (
        <React.Fragment>
            <Wrapper id="marketingPage">
                <Header />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 3, md: 1 } }} >
                    <Box
                        sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", }} >
                        <Typography
                            color="initial"
                            sx={{
                                width: '100%',
                                fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
                                fontWeight: "bold",
                                textAlign: "center",
                                lineHeight: "1.2",
                            }}
                        >
                            Influencer Marketing Content <br />On Demand
                        </Typography>
                        <Typography
                            color="#5E5E5E"
                            sx={{
                                width: "100%",
                                lineHeight: "1",
                                mt: 2, fontWeight: "600",
                                fontSize: { xs: "12px", md: "18px" },
                            }}
                        >
                            The all-in-one FREE platform to hire influencers for content
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, gap: 1, px: 1 }}>
                    <input type="text" className="Marketing_email_input" placeholder="Enter your email address" />
                    <Button variant="contained" sx={{ height: '42px', fontSize: '14px' }}>Join Waitlist</Button>
                </Box>
                <Box className="profile_page_box" sx={{ mt: { xs: 3, md: 8 }, overflow: 'hidde' }}>
                    <Box sx={{ width: { xs: '80%', md: "60%" }, m: 'auto', position: "relative", mt: 3, height: { xs: "250px", md: "200px" }, background: "#fff" }}>
                        <img src={profile_page} alt="" className="profile_page_class" />
                    </Box>
                </Box>
                <Box sx={{ width: { xs: "95%", md: "100%" }, height: 'auto', m: 'auto', bgcolor: '#000', borderRadius: '10px', p: { xs: 2, md: 4 }, mt: 8, mb: 4 }}>
                    <Typography variant="h4" color="#fff" sx={{ fontWeight: "bold", textAlign: "center", mt: 2, mb: 3 }}> Why Join Simplif?</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexDirection: { xs: "column", md: "row" }, gap: 2, px: { xs: 1, md: 4 } }}>
                        {cards.map((card, index) => (
                            <Box key={index} sx={{ width: { xs: '100%', md: '25%' }, display: "flex", alignItems: "start", flexDirection: "column", gap: 2, my: 2 }}>
                                <Box sx={{ width: "70px", height: "70px", position: "relative", bgcolor: '#2C2C2C', display: "flex", justifyContent: "center", alignItems: "center", borderRadius: '10px' }}>
                                    <img src={card.image} alt={card.title} style={{ width: '50%', objectFit: 'cover' }} />
                                </Box>
                                <Typography variant="h6" color="#fff" sx={{ mt: { xs: 0.4, md: 2 }, fontWeight: "bold" }}>{card.title}</Typography>
                                <Typography variant="body1" color="#fff" sx={{ fontSize: "14px" }}>{card.description}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Footer />
            </Wrapper>
        </React.Fragment >
    );
};

export default MarketingPage;
