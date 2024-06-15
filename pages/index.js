import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, TextField, IconButton, Avatar } from '@mui/material';
import { LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import Head from 'next/head';
import Image from 'next/image';
import rishabhImg from '../public/images/rishabh.jpg';
import sarthakImg from '../public/images/sarthak.jpg';

const Home = () => (
  <main>
    <Head>
      <title>KanoonAI</title>
    </Head>
    <Header />
    <HeroSection />
    <AboutKanoonAISection />
    <FeaturesSection />
    <HowItWorksSection />
    <AboutTeamSection />
    <ContactUsSection />
    <Footer />
  </main>
);

const Header = () => (
  <AppBar position="static" className="header">
    <Toolbar>
      <Typography variant="h6" className="logo">
        KanoonAI
      </Typography>
      <div className="nav-links">
        <Button variant="text" onClick={() => document.getElementById('about-kanoonai-section').scrollIntoView({ behavior: 'smooth' })}>About KanoonAI</Button>
        <Button variant="text" onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}>Features</Button>
        <Button variant="text" onClick={() => document.getElementById('how-it-works-section').scrollIntoView({ behavior: 'smooth' })}>How It Works</Button>
        <Button variant="text" onClick={() => document.getElementById('about-team-section').scrollIntoView({ behavior: 'smooth' })}>About Us</Button>
        <Button variant="text" onClick={() => document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' })}>Contact Us</Button>
      </div>
    </Toolbar>
  </AppBar>
);

const HeroSection = () => (
  <section id="hero-section" className="hero-section">
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom className="hero-title">
        Redefining law firm efficiency
      </Typography>
      <Button variant="contained" color="primary" size="large" className="hero-button">
        Sign Up for Early Access
      </Button>
    </Container>
  </section>
);

const AboutKanoonAISection = () => (
  <section id="about-kanoonai-section" className="section light-bg">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        About Kanoon AI
      </Typography>
      <Typography align="center" paragraph>
        Kanoon AI is a groundbreaking AI-powered assistant designed to revolutionize legal research, drafting, and workflow management.
      </Typography>
      <Typography align="center" paragraph>
        We leverage OpenAI and our vast legal databases to securely manage your cases, pinpoint relevant precedents and generate comprehensive drafts. We're here to empower lawyers to do what they do best by automating the rest.
      </Typography>
    </Container>
  </section>
);

const FeaturesSection = () => (
  <section id="features-section" className="section">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose KanoonAI?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <FeatureCard title="Automated Research" description="Leverage our AI to perform precedent research quickly and accurately." />
        <FeatureCard title="Draft Generation" description="Automatically generate initial drafts for legal statements, saving valuable time." />
        <FeatureCard title="NLP Technology" description="Cutting-edge NLP technology to analyze vast amounts of case law and legal texts." />
      </Grid>
    </Container>
  </section>
);

const FeatureCard = ({ title, description }) => (
  <Grid item xs={12} sm={4}>
    <Card className="feature-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const HowItWorksSection = () => (
  <section id="how-it-works-section" className="section dark-bg">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Step number="1" title="Input Case Details" description="Enter the specifics of your case into our intuitive platform." />
        <Step number="2" title="AI Analysis" description="Our AI analyzes relevant case laws and legal texts." />
        <Step number="3" title="Receive Drafts" description="Get initial drafts and insights, ready for review and customization." />
      </Grid>
    </Container>
  </section>
);

const Step = ({ number, title, description }) => (
  <Grid item xs={12} sm={4}>
    <Card className="step-card">
      <CardContent>
        <Typography variant="h4" className="step-number" gutterBottom>{number}</Typography>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const AboutTeamSection = () => (
  <section id="about-team-section" className="section">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <TeamMember 
          key="rishabh-jain" 
          name="Rishabh Jain" 
          role="Managing Director" 
          linkedin="https://www.linkedin.com/in/rishabh-jain" 
          imgSrc={rishabhImg} 
        />
        <TeamMember 
          key="sarthak-jain" 
          name="Sarthak Jain" 
          role="Co-Founder" 
          linkedin="https://www.linkedin.com/in/sarthak-jain" 
          imgSrc={sarthakImg} 
        />
      </Grid>
    </Container>
  </section>
);

const TeamMember = ({ name, role, linkedin, imgSrc }) => (
  <Grid item xs={12} sm={6}>
    <Card className="team-card">
      <Avatar className="team-avatar">
        <Image src={imgSrc} alt={name} />
      </Avatar>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{role}</Typography>
        <IconButton color="inherit" href={linkedin}>
          <LinkedIn />
        </IconButton>
      </CardContent>
    </Card>
  </Grid>
);

const ContactUsSection = () => (
  <section id="contact-us-section" className="section light-bg">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <form className="contact-form">
        <TextField fullWidth label="Name" margin="normal" required />
        <TextField fullWidth label="Email" margin="normal" required />
        <TextField fullWidth label="Phone" margin="normal" required />
        <TextField fullWidth label="Message" margin="normal" multiline rows={4} required />
        <Button variant="contained" color="primary" size="large" className="contact-button">
          Send Message
        </Button>
      </form>
      <div className="contact-info">
        <Typography align="center">Phone: +91 6375948729</Typography>
        <Typography align="center">Email: team@kanoonai.com</Typography>
      </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <Container maxWidth="md">
      <div className="footer-links">
        <Button variant="text">Privacy Policy</Button>
        <Button variant="text">Terms of Service</Button>
      </div>
      <div className="social-media">
        <IconButton color="inherit" href="https://www.linkedin.com">
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit" href="https://www.twitter.com">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://www.facebook.com">
          <Facebook />
        </IconButton>
      </div>
      <Typography variant="body2" align="center">&copy; 2024 KanoonAI. All rights reserved.</Typography>
    </Container>
  </footer>
);

export default Home;
