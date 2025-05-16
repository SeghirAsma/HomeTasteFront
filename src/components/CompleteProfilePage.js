import * as React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { tabClasses } from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';




export default function MyProfile() {

    const [description, setdescription] = useState('');
    const [businessName, setbusinessName] = useState('');
    const [documentUrl, setdocumentUrl] = useState(null);
    const [businessType, setbusinessType] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [socialLinks, setSocialLinks] = useState([]);
    const [newLink, setNewLink] = useState('');
    const inputFileRef = useRef(null);
    const [profileImgUrl, setprofileImgUrl] = useState(null);
    const initialImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small_2x/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png";

    const [profileImgPreview, setProfileImgPreview] = useState(initialImageUrl);
    const navigate = useNavigate();


    const handleNewLinkChange = (e) => {setNewLink(e.target.value);};

    const handleAddSocialLink = () => {
      if (newLink.trim() !== '') {
        setSocialLinks([...socialLinks, newLink.trim()]);
        setNewLink('');
      }
    };

    const handleRemoveLink = (indexToRemove) => { setSocialLinks(socialLinks.filter((_, index) => index !== indexToRemove));};
    const handleDescriptionChange = (event) => { setdescription(event.target.value); };
    const handlebusinessNameChange = (event) => { setbusinessName(event.target.value);};
    const handleBusinessTypeChange = (event, value) => {setbusinessType(value); };
    const handledateOfBirthChange = (event) => { setdateOfBirth(event.target.value); };
  
    const handleFileChange = (event) => { const file = event.target.files[0];
                                          setdocumentUrl(file);
                                          if (file) {
                                            console.log("Fichier sélectionné :", file.name);
                                          }
                                        };
                              
       const handleFileClick = () => { inputFileRef.current.click(); };

  const handleFileImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setprofileImgUrl(file);
      setProfileImgPreview(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => { navigate('/SignIn');}

    const handleSubmit = async (event) => {
          event.preventDefault();
          if (documentUrl && description && businessName && businessType && dateOfBirth &&socialLinks && profileImgUrl) {
        console.log({ documentUrl ,description, businessName, businessType, dateOfBirth,socialLinks });

            const formData = new FormData();
            formData.append('description', description);
            formData.append('businessName', businessName);
            formData.append('documentUrl', documentUrl);
            formData.append('businessType', businessType);
            formData.append('dateOfBirth', dateOfBirth);
            formData.append('profileImgUrl', profileImgUrl);
            socialLinks.forEach((link) => { formData.append("socialLinks", link); });

        
            try {
              const storedToken = localStorage.getItem('token');
              console.log('Token:', storedToken);

             const response = await axios.post('http://localhost:8084/api/Profile/complete', formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: `Bearer ${storedToken}`,
                },
              });
             console.log("after request", response.data);
              setdescription('');
              setbusinessName('');
              setdocumentUrl(null);
              setbusinessType('');
              setdateOfBirth('');
              setSocialLinks([]);
              setprofileImgUrl(null);
              setProfileImgPreview(initialImageUrl); 

              navigate('/SignIn');
            
            } catch (error) {
              console.error('Erreur lors de l\'envoi du profil:', error);
            }
          }
        };

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography level="h3" component="h1" sx={{ mt: 1, mb: 2 }}>
            Complete Profile
          </Typography>
        </Box>
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
          </TabList>
        </Tabs>
      </Box>
      <form >
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
              >
                <img
                  src={profileImgPreview}
                  alt="Profile"
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: 'sm',
                }}
                onClick={handleFileClick}
              >
                <EditRoundedIcon />
              </IconButton>
               <input
                type="file"
                accept="image/*"
                ref={inputFileRef}
                style={{ display: 'none' }}
                onChange={handleFileImgChange}
              />
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel >Business Name</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Business Name" startDecorator={<AccountCircle />}
                  value={businessName} onChange={handlebusinessNameChange} />
                </FormControl>
              </Stack>
              <Stack  spacing={1}>
                <FormControl>
                  <FormLabel>Date Of Birth</FormLabel>
                  <Input type= "Date" value={dateOfBirth} onChange={handledateOfBirthChange}/>
                </FormControl>
              </Stack>
              <div>
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Business Type</FormLabel>
                  <Select
                    size="sm"
                    startDecorator={<BusinessRoundedIcon />}
                    placeholder="Choose your business type"
                    value={businessType}
                    onChange={handleBusinessTypeChange}
                  >
                    <Option value="FOOD">FOOD</Option>
                    <Option value="CLOTHING">CLOTHING</Option>
                    <Option value="ACCESSORIES">ACCESSORIES</Option>
                  </Select>
                </FormControl>
              </div>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          </CardOverflow>
        
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
            <Typography level="body-sm">
              Write a short introduction to be displayed on your profile
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
             placeholder="Please describe your activity, products, experience, and what makes your offer unique."
             value={description}
             onChange={handleDescriptionChange}
            />
         
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          </CardOverflow>

            <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Input Document</Typography>
            <Typography level="body-sm">
              Share a few snippets of your work.
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <Card
            variant="soft"
            sx={[
                {
                borderRadius: 'sm',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: 'center',
                px: 3,
                flexGrow: 1,
                boxShadow: 'none',
                },
            ]}
            >
            <AspectRatio
                ratio="1"
                variant="solid"
                color="primary"
                sx={{ minWidth: 32, borderRadius: '50%', '--Icon-fontSize': '16px' }}
            >
                <div>
                <FileUploadRoundedIcon />
                </div>
            </AspectRatio>
              <input type="file" required="" id="file-input"
              onChange={handleFileChange}/>
              <Typography level="body-sm" sx={{ textAlign: 'center' }}>
                All types are allowed (max. 2GB)
            </Typography>
            </Card>

          </Stack>

          <Divider />
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
             <Box sx={{ my: 1 }}>
            <Typography level="title-md">Social Links</Typography>
            <Typography level="body-sm">
             Add your social media profile links
            </Typography>
           <Stack spacing={2} mt={2}>
           <Stack direction="row" spacing={1}>
      <Input
        placeholder="https://example.com/profile"
        value={newLink}
        onChange={handleNewLinkChange}
        size="sm"
      />
      <Button variant="outlined" size="sm" onClick={handleAddSocialLink}>
        Add
      </Button>
    </Stack>

    {socialLinks.map((link, index) => (
      <Stack direction="row" spacing={1} key={index}>
        <Input value={link} readOnly size="sm" sx={{ flex: 1 }} />
        <Button
          color="danger"
          size="sm"
          onClick={() => handleRemoveLink(index)}
        >
          Remove
        </Button>
      </Stack>
    ))}
        </Stack>
          </Box>
           
          <Divider />
          
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          </CardOverflow>

            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" size="sm" variant="solid" onClick={handleSubmit}>
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
      </form>
    </Box>
  );
}
