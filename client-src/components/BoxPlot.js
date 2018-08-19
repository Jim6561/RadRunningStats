import React from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

class BoxPlot extends React.Component {
	//important members
	//node - the thing we add to the svg

    constructor(props){
        super(props);
        this.createChart = this.createChart.bind(this);
    }
    componentDidMount() {
        this.createChart();
    }
    
    componentDidUpdate() {
        this.createChart();
    }

    createChart() {
        const node = this.node;

        const chartWidth = this.props.size[0];
        const chartHeight = this.props.size[1];
        const boxHeight = this.props.size[1];
        const padding = 3;

        const xScale = scaleLinear()
            .domain([this.props.chartMin, this.props.chartMax])
            .range([padding, chartWidth-padding]);

         select(node)
            .selectAll('.quartileBox, .whisker, .joinLine, .medLine')
            .remove();

        select(node)
        	.append('rect')
        	.classed('quartileBox', true)
        	.style('fill', '#E0FFF0')
        	.style('stroke', 'black')
        	.attr('x', xScale(this.props.data.q1))
        	.attr('y', 0)
        	.attr('width', xScale(this.props.data.q3) - xScale(this.props.data.q1))
        	.attr('height', boxHeight);

        //minWhisker
        select(node)
        	.append('line')
        	.classed('whisker', true)
        	.style('stroke', 'black')
        	.attr('x1', xScale(this.props.data.min))
        	.attr('y1', 0)
        	.attr('x2', xScale(this.props.data.min))
        	.attr('y2', chartHeight);

        //maxWhisker
        select(node)
        	.append('line')
        	.classed('whisker', true)
        	.style('stroke', 'black')
        	.attr('x1', xScale(this.props.data.max))
        	.attr('y1', 0)
        	.attr('x2', xScale(this.props.data.max))
        	.attr('y2', chartHeight);

        //join box to min whisker
        select(node)
        	.append('line')
        	.classed('joinLine', true)
        	.style('stroke', 'black')
        	.attr('x1', xScale(this.props.data.min))
        	.attr('y1', chartHeight / 2)
        	.attr('x2', xScale(this.props.data.q1))
        	.attr('y2', chartHeight / 2);

        //join box to max whisker
        select(node)
        	.append('line')
        	.classed('joinLine', true)
        	.style('stroke', 'black')
        	.attr('x1', xScale(this.props.data.q3))
        	.attr('y1', chartHeight / 2)
        	.attr('x2', xScale(this.props.data.max))
        	.attr('y2', chartHeight / 2);  

       	//join box to max whisker
        select(node)
        	.append('line')
        	.classed('medLine', true)
        	.style('stroke', 'black')
        	.attr('x1', xScale(this.props.data.median))
        	.attr('y1', 0)
        	.attr('x2', xScale(this.props.data.median))
        	.attr('y2', chartHeight);
        
    }

    render() {
        return <svg ref={node => this.node = node}
            width={this.props.size[0]} height={this.props.size[1]}>
        </svg>
    }
}

BoxPlot.propTypes = {
  chartMin: PropTypes.number.isRequired,
  chartMax: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired, //An object of the five points, min, q1, median, q3, max
  size: PropTypes.array.isRequired //How big to render the output
}

export default BoxPlot