# AgentLeads - Real Estate Lead Generation Website

A modern, responsive website for AI-powered real estate lead generation, designed to be hosted on GitHub Pages.

## Features

- Modern, responsive design
- Lead capture form
- Pricing plans
- Testimonials section
- Mobile-friendly navigation
- Smooth scrolling
- Animated elements on scroll

## Setup Instructions

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/agentleads.online.git
   cd agentleads.online
   ```

2. Open `index.html` in your browser to view the website locally.

3. Make any desired changes to the HTML, CSS, or JavaScript files.

### Deployment to GitHub Pages

1. Create a new GitHub repository.

2. Push your code to the repository:
   ```
   git remote add origin https://github.com/yourusername/agentleads.online.git
   git push -u origin main
   ```

3. In your GitHub repository, go to Settings > Pages.

4. Under "Source", select "main" branch and click "Save".

5. Your site will be published at `https://yourusername.github.io/agentleads.online/`.

### Connecting Your Custom Domain

1. In your domain registrar (like GoDaddy, Namecheap, etc.), create the following DNS records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: yourusername.github.io

2. In your GitHub repository, go to Settings > Pages.

3. Under "Custom domain", enter your domain name (agentleads.online) and click "Save".

4. Check "Enforce HTTPS" for secure connections.

## Customization

### Images

Replace the placeholder images in the `images` directory with your own:
- `hero-image.jpg` - Main hero image (recommended size: 1200x800px)
- `testimonial-1.jpg` - Testimonial author image (recommended size: 200x200px)
- `testimonial-2.jpg` - Testimonial author image (recommended size: 200x200px)

### Content

Edit the `index.html` file to update:
- Website text and headlines
- Pricing information
- Feature descriptions
- Contact information
- Testimonials

### Styling

Modify the `css/styles.css` file to change:
- Color scheme (update the variables in the `:root` section)
- Fonts and typography
- Layout and spacing
- Animations and effects

## License

[MIT License](LICENSE)

## Contact

For any questions or support, please contact [your email address]. 