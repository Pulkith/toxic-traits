import React from 'react';
import { TextField, Link, Typography, Grid  } from '@mui/material';
import PersonCard from './Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import { ToxicPerson, IToxicPerson } from '../../../server/src/models/toxicperson.model'
import { useNavigate } from "react-router-dom";

interface Person {
    _id: string;
    firstName: string;
    lastName: string;
    pictureUrl: string;
    toxicTraits: string[];
}


  const people : Person[] =  [
    {
        _id: '1',
        firstName: 'Kylie',
        lastName: 'Chang',
        pictureUrl: 'https://richmondmagazine.com/downloads/39615/download/Eat%26Drink_Ingredient_Corn1_GETTYIMAGES_rp0723.jpg?cb=226f9397bea90b2573b21c6ed73c69a6', 
        toxicTraits: ['says "lol" in real life', 'enjoys eating raw tomatoes like apples', 'spends more time in cafes than classes'],
      },
      {
        _id: '2',
        firstName: 'Carly',
        lastName: 'Googel',
        pictureUrl: 'https://richmondmagazine.com/downloads/39615/download/Eat%26Drink_Ingredient_Corn1_GETTYIMAGES_rp0723.jpg?cb=226f9397bea90b2573b21c6ed73c69a6', 
        toxicTraits: ['sleeps at 10 pm', 'eats rx bars', 'last name is googel'],
      },
      {
        _id: '3',
        firstName: 'Pulkith',
        lastName: 'Paruchuri',
        pictureUrl: 'https://richmondmagazine.com/downloads/39615/download/Eat%26Drink_Ingredient_Corn1_GETTYIMAGES_rp0723.jpg?cb=226f9397bea90b2573b21c6ed73c69a6',
        toxicTraits: ['says he has no toxic traits', 'sleeps at 7 am "like deadass"', 'hates people who says "lol"'],
      }
  ]



function ToxicTraitsPage() {
    const navigate = useNavigate();
  
    function handleClick(firstName: string, pictureUrl: string) {
      navigate(`/ToxicTraitIndividual/${firstName}/${encodeURIComponent(pictureUrl)}`);
    }
        
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPeople = people.filter(person => {
      return (
        person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.toxicTraits.some(trait => trait.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  
  return (
    <div style={{ padding: '50px' }}>
        <h1> corny toxic traits! </h1>
        <Box sx={{ display: 'flex', mb: 2, boxShadow: 1, borderRadius: 2, p: 1}}>
          <SearchIcon sx={{ marginRight: 1 }} />
          <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
      </Box>
      </Grid>
        <Grid container spacing={3}>
            {people.map((person, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <CardActions>
                  <Button type="button" onClick={() => handleClick(person.firstName, person.pictureUrl)}>
                <PersonCard name={person.firstName} image={person.pictureUrl}  />
                </Button>
                </CardActions>
                </Grid>
            ))}
        </Grid>
    </div>
    
  );
}

export default ToxicTraitsPage;
