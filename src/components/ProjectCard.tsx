import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';

export default function ProjectCard(props: any) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const width = isMobile ? 350 : 500;
  const imgHeight = isMobile ? 197 : 281;

  return (
    <Card sx={{width: width}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={imgHeight}
          image={props.img}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}